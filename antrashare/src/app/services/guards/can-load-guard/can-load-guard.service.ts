import { Injectable } from '@angular/core';
import {
  Route
  , Router
  , CanLoad
} from'@angular/router';
import jwtDecode from 'jwt-decode';

import { User } from 'src/app/shared/models/User';
import { LoginService } from 'src/app/login/service/login.service';
import { LocalStorageService } from '../../local-storage/local-storage.service';
import { setExpireInUnix } from 'src/app/shared/utils/functions';

@Injectable({
  providedIn: 'root'
})

export class CanLoadGuardService implements CanLoad {

  constructor(
    private _router: Router
    , private loginService: LoginService
    , private localStorage: LocalStorageService
  ) { }

  public canLoad( route: Route ): boolean {

    let url: string | undefined = route.path;
    console.log('URL: ', url);

    // check if user already authenticated
    if (!this.loginService.checkExist()) {
      alert('You have not logged in, redirected to Login.');
      this._router.navigate(['login'], { queryParams: { retUrl: url } });
      console.log('canLoad(): ', false, 'user not logged in')
      return false;
    }
    // check user's role
    const user: User = jwtDecode(this.localStorage.token.jwt);
    if (!this.loginService.isAdmin && user.userRole === 'user') {
      alert('You are not an admin, redirected to Feed.');
      this._router.navigate(['feed'], { queryParams: { retUrl: url } });
      console.log('canLoad(): ', false, 'user not authorized')
      return false;
    }
  // update the token in localStorage
  const expiration = setExpireInUnix(24 * 60 * 60); // 24 hours
  const newToken = {
    jwt: this.localStorage.token.jwt,
    expire: `${expiration}`
  };
  this.localStorage.token = newToken;
  console.log('canLoad() update: ', this.localStorage.token)
  return true;
  }
}
