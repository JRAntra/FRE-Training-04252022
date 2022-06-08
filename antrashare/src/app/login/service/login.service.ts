import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  loginAccount(account: any) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(account);
    return this.http.post(this.baseURL + 'api/login', body, { 'headers': headers });
  }

  checkExist(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL + 'api/users/getAllUsers');
  }
}



