import { Injectable } from '@angular/core';
import {
    Route
  , Router
  , CanActivate
  , ActivatedRouteSnapshot
  , RouterStateSnapshot
  , UrlTree
} from '@angular/router';
import { LoginService } from 'src/app/login/service/login.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { setExpireInUnix, nowInUnix } from 'src/app/shared/utils/functions';

@Injectable({
  providedIn: 'root'
})

export class CanActivateGuardService implements CanActivate {

  constructor(
      private _router: Router
    , private loginService: LoginService
    , private localStorage: LocalStorageService
  ) { }

  // method to check localStorage and service whether a user already authenticated and have session
  // // before deciding to permit user to access protected route for authenticated users
  canActivate(
    route: ActivatedRouteSnapshot
  , state: RouterStateSnapshot): boolean | UrlTree {

    if (this.loginService.checkLoggedIn() === false) {
      console.log('hit alert')
      alert('You have not logged in, redirected to Login.');
      this._router.navigate(['login'], { queryParams: { retUrl: route.url } });
      return false;
    }
    const expiration = setExpireInUnix(24 * 60 * 60); // 24 hours
    const newToken = {
      jwt: this.localStorage.token.jwt,
      expire: `${expiration}`
    };
    this.localStorage.token = newToken;
    console.log('loginService.checkLoggedIn()', this.localStorage.token)
    return true;
  }

}
