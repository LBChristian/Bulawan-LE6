import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  get isLoggedIn(): boolean {
    return !!this.tokenStorage.getToken();
  }

  logout(): void {
    this.tokenStorage.signOut();
    this.router.navigate(['/login']);
  }
}
