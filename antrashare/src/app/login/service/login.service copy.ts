import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import jwtDecode from 'jwt-decode'; // library to decode JWT Jason Web Token
import { User, LikedNews } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL: string = 'http://localhost:3000/';

  public user$: Subject<User> = new ReplaySubject<User>();
  public likedNewsList$: Subject<LikedNews[]> = new ReplaySubject<LikedNews[]>();
  public isLoggedIn: boolean = false;
  public isAdmin: boolean = false;

  constructor(
    private http: HttpClient
    , private _router: Router) { }

  loginAccount(account: any) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(account);
    const observer = {
      next: (response: any) => {
        const jwtToken = response.bearerToken;
        const decoded: User = jwtDecode(jwtToken);
        this.user$.next(decoded);
        this.isLoggedIn = true;
        if (response.userRole === 'admin') this.isAdmin = true;
        this._router.navigate(['feed']);
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
