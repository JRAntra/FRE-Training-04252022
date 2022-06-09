import { LoginService } from 'src/app/features/login/login.service';
import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (!this.loginService.isUserLoggedIn()) {
      alert('You are not allowed to view this page. You must be logged in.');

      this.router.navigate(['login'], { queryParams: { retUrl: route.url } });
      return false;
    }

    if (!this.loginService.isAdminUser()) {
      alert('You are not allowed to view this page. You must be an Admin.');

      return false;
    }

    return true;
  }
}
