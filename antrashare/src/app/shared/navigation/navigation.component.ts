import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/login/service/login.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { dummyUser } from '../models/User';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  constructor(
    private _router: Router
    , private localStorage: LocalStorageService
    , private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  public onLogout(): void {

    // TODO: logout request to backend
    this.localStorage.clear();
    this.loginService.user$.next(dummyUser);
    this.loginService.likedNewsList$.next([]);
    this.loginService.isLoggedIn = false;
    this.loginService.isAdmin = false;
    this._router.navigate(['login'], { queryParams: { retUrl: 'logout' } });


    console.log('onLogout(): ',
    this.localStorage.token,
    this.loginService.user$.subscribe((data) => console.log(data)),
    this.loginService.likedNewsList$.subscribe((data) => console.log(data)),
    this.loginService.isLoggedIn,
    this.loginService.isAdmin)
  }
}
