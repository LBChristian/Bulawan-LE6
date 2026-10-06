import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../../models/post.model';
import { API_URL } from '../../config';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit, OnDestroy {
  private routeSub: Subscription = new Subscription();
  private id: number = 0;

  post?: Post;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // Takes the ID from the URL (posts/:id), then loads that post
    this.routeSub = this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.initData();
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  initData(): void {
    // BlogAPI returns a list (array) even for a single post, so take the first item
    this.http.get<Post[]>(API_URL + '/api/controller/' + this.id).subscribe({
      next: (data: Post[]) => {
        if (data.length > 0) {
          this.post = data[0];
          this.errorMessage = '';
        } else {
          this.post = undefined;
          this.errorMessage = 'Post not found.';
        }
        console.log(this.post);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Could not load this post.';
      }
    })
  }
}
