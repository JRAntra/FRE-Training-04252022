import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';
import { User } from './components/register/register.component';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<any> {
    return this.http.post(baseURL + 'api/register/createNewAccount', user);
  }
}
