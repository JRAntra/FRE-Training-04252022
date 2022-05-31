import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  checkID(userID: string) {
    return this.http.get<any>(`http://localhost:4231/api/register/getuserbyid/${ userID }`)
  }

  checkUserEmail(userEmail: string) {
    return this.http.get<any>(`http://localhost:4231/api/register/checkexistbyemail/${ userEmail }`)
  }

  checkUserName(userName: string) {
    return this.http.get<any>(`http://localhost:4231/api/register/checkexistbyusername/${ userName }`)
  }

  getUser(userEmail: string, password: string) {
    return this.http.post<any>('http://localhost:4231/api/login', { userEmail, password });
  }

  registerNewUser(userEmail: string, userName: string, password: string) {
    return this.http.post<any>('http://localhost:4231/api/register/createnewaccount', { userEmail, userName, password })
  }

}
