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
import { LocalStorage } from 'src/app/services/local-storage';

@Injectable({
  providedIn: 'root'
})

export class CanActivateGuardService implements CanActivate {

  constructor(
      private _router: Router
    , private loginService: LoginService
    , private localStorage: LocalStorageService
  ) { }

  canActivate(
      route: ActivatedRouteSnapshot
    , state: RouterStateSnapshot): boolean | UrlTree {

      if (this.loginService.isLoggedIn === false) {
        alert('You have not logged in, redirected to Login.');

        this._router.navigate(['login'], { queryParams: { retUrl: route.url } });
        return false;
      }
      return true;
    }

}
