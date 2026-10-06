import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../config';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  title = '';
  body = '';
  errorMessage = '';
  successMessage = '';
  submitting = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  onSubmit(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.title.trim() || !this.body.trim()) {
      this.errorMessage = 'Please enter both a title and body.';
      return;
    }

    this.submitting = true;

    const post = {
      title: this.title.trim(),
      body: this.body.trim()
    };

    this.http.post(
      API_URL + '/api/controller/add',
      post,
      { responseType: 'text' }
    ).subscribe({
      next: () => {
        this.submitting = false;
        this.successMessage = 'Post created successfully.';

        setTimeout(() => {
          this.router.navigate(['/']);
        }, 800);
      },

      error: (err) => {
        this.submitting = false;
        console.error(err);

        if (err.status === 401) {
          this.errorMessage = 'You are not authorized. Please log in again.';
        } else {
          this.errorMessage = 'Failed to create the post.';
        }
      }
    });
  }
}