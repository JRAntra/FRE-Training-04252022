import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  isLoggedIn() {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const payload = JSON.parse(atob(token!.split('.')[1])); // decode payload of token

      return payload.exp > Date.now() / 1000;
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
}
