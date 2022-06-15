import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import jwtDecode from 'jwt-decode'; // library to decode JWT Jason Web Token
import { User, LikedNews } from 'src/app/shared/models/User';
import { setExpireInUnix } from 'src/app/shared/utils/functions';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { nowInUnix } from 'src/app/shared/utils/functions';

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
    , private _router: Router
    , private localStorage: LocalStorageService) { }

  // method to log in
  loginAccount(account: any) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(account);
    const observer = {
      next: (response: any) => {
        const jwtToken = response.bearerToken;
        const decoded: User = jwtDecode(jwtToken);
        this.user$.next(decoded);
        this.isLoggedIn = true;

        const expiration = setExpireInUnix(24 * 60 * 60); // 24 hours
        this.localStorage.token = {
          jwt: jwtToken,
          expire: `${expiration}`
        };
        if (response.userRole === 'admin') this.isAdmin = true;
      },
      error: (err: Error) => console.log('Login fails, with: ', err),
      complete: () => {
        console.log('User logged in, redirecting to feed');
        this._router.navigate(['feed']);
      }
    };

    return this.http
      .post<User>(this.baseURL + 'api/login', body, { 'headers': headers })
      .subscribe(observer);
  }

  checkExist(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL + 'api/users/getAllUsers');
  }

  // check if user already logged in by checking this service and localStorage
  checkLoggedIn(): boolean {
    console.log('checkLoggedIn(): ', this.localStorage.token, nowInUnix(), this.localStorage.token.expire > nowInUnix());
    if (!this.isLoggedIn && !this.localStorage.token) return false;
    else if (this.localStorage.token && (!this.localStorage.token.jwt || !this.localStorage.token.jwt.length || !jwtDecode(this.localStorage.token.jwt)) || this.localStorage.token.expire < nowInUnix()) {
      this.localStorage.clear()
      return false;
    }
    return true;
  }

}
