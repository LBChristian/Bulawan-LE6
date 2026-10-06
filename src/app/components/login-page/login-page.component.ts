import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  }
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.authService.isLoggedIn = true;
      this.router.navigate([this.authService.redirectUrl]);
    }
  }

  onSubmit() {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.token);
        const userId = this.getUserIdFromToken(data.token);
        if (userId !== null) {
          this.tokenStorage.saveUser(userId);
        }
        this.authService.isLoggedIn = true;
        this.router.navigate([this.authService.redirectUrl]).then(() => {
          window.location.reload();
        });
      },
      error: err => {
        console.error(err);
        this.errorMessage = 'Login failed. Check your username and password.';
      }
    });
  }

  // BlogAPI does not send the user id separately; it is inside the JWT payload.
  private getUserIdFromToken(token: string): number | null {
    try {
      const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
      const payload = JSON.parse(atob(base64));
      const id = payload['nameid']
        ?? payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
      return id !== undefined ? Number(id) : null;
    } catch {
      return null;
    }
  }
}
