import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { User } from 'src/app/core/interfaces/interface';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  path = 'api/users/getAllUsers';
  username: string = '';
  userSubject$: Subject<any> = new Subject();
  user$: Observable<User> = this.userSubject$.asObservable();

  constructor(private http: HttpClient) {}

  setuserName(data: string) {
    this.username = data;
  }
  getuserName() {
    return this.username;
  }

  getAllUsers(): Observable<any> {
    return this.http.get(baseURL + this.path);
  }
}
