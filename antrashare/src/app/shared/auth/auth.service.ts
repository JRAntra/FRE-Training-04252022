import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn : boolean;

  constructor() {
    if (JSON.parse(localStorage.getItem("jwt")).userRole !== "admin") {
      this.loggedIn = false;
    }
    else {
      this.loggedIn = true;
    }
  }

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 100);
    });
    return promise;
  }
/*
  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  } */
}
