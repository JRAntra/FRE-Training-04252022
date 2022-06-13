import { Injectable } from '@angular/core';
import {
    Route
  , Router
  , CanLoad
} from'@angular/router';
import { LoginService } from 'src/app/login/service/login.service';

@Injectable({
  providedIn: 'root'
})

export class CanLoadGuardService implements CanLoad {

  constructor(
    private _router: Router
    , private loginService: LoginService
  ) { }

  canLoad(route: Route): boolean {

    let url: string | undefined = route.path;
    console.log('URL: ', url);

    if (!url) return false;

    if (url === 'admin' && this.loginService.isLoggedIn === false) {
      alert('You have not logged in, redirected to Login.');
      this._router.navigate(['login'], { queryParams: { retUrl: url } });
      return false;
      }

    if (url === 'admin' && this.loginService.isAdmin === false) {
      alert('You are not an admin, redirected to Feed.');
      this._router.navigate(['feed'], { queryParams: { retUrl: url } });
      return false;
      }
    return true;
  }
}
