import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseURL: string = 'http://localhost:4234/';

  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(user);
    return this.http.post(
      this.baseURL + 'api/register/createNewAccount',
      body,
      { headers: headers }
    );
  }

  loginUser(user: any): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(user);
    return this.http.post(this.baseURL + 'api/login', body, {
      headers: headers,
    });
  }
}
