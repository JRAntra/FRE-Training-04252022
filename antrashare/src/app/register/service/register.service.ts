import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseURL: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  registerAccount(account: any) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(account);
    return this.http.post(this.baseURL + 'api/register/createNewAccount', body, { 'headers': headers } );
  }

  checkDuplicate(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL + 'api/users/getAllUsers');
  }
  

  /*
    getPeople(): Observable<Person[]> {
      console.log('getPeople ' + this.baseURL + 'people')
      return this.http.get<Person[]>(this.baseURL + 'people')
    } */
}



