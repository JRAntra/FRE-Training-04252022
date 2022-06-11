import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  isLoggedIn() {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const userInfo: any = jwt_decode(token!); //decode the token

      return userInfo.exp > Date.now() / 1000; //check if the token is expired
    } else {
      return false;
    }
  }

  isAdmin() {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const payload = JSON.parse(atob(token!.split('.')[1]));
      console.log(payload);
      return payload.userRole === 'admin';
    } else {
      return false;
    }
  }

  getUserInfo() {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const userInfo: any = jwt_decode(token!); //decode the token

      return userInfo; //check if the token is expired
    } else {
      return null;
    }
  }
}
