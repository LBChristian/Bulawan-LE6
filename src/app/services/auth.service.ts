import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config';

// BlogAPI's LoginController returns { token: "<jwt>" }
export interface LoginPostData {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  public redirectUrl: string = "";

  constructor(private http: HttpClient) {

  }

  login(username: string, password: string): Observable<LoginPostData> {
    return this.http.post<LoginPostData>(API_URL + '/Login', { username, password });
  }
}
