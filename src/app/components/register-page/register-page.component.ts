import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { API_URL } from '../../config';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    firstName: null,
    lastName: null
  }
  errorMessage: string = '';

  constructor(private http: HttpClient,
    private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form);

    this.http.post(API_URL + '/api/controller/register', this.form, { responseType: 'text' }).subscribe({
      next: data => {
        this.route.navigate(['/login']);
      },
      error: err => {
        console.error(err);
        this.errorMessage = 'Registration failed. Check the fields and try again.';
      }
    });
  }
}
