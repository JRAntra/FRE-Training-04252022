import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import jwtDecode from 'jwt-decode'; // library to decode JWT Jason Web Token
import { User } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL: string = 'http://localhost:3000/';

  public user$: Subject<User> = new ReplaySubject<User>();

  constructor(private http: HttpClient) { }

  loginAccount(account: any) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(account);
    const observer = {
      next: (response: any) => {
        const jwtToken = response.bearerToken;
        const decoded: User = jwtDecode(jwtToken);
        this.user$.next(decoded);
      },
      error: (err: Error) => console.log('Login fails, with: ', err),
      complete: () => console.log('User logged in.')
    };

    return this.http
      .post<User>(this.baseURL + 'api/login', body, { 'headers': headers })
      .subscribe(observer);
  }

  checkExist(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL + 'api/users/getAllUsers');
  }
}
