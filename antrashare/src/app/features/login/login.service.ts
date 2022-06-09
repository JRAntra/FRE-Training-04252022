import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  path = 'api/login';
  isloggedIn: boolean;
  isAdmin: boolean;

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  constructor(private http: HttpClient) {
    this.isloggedIn = false;
    this.isAdmin = false;
  }

  loginUser(logInfo: any): Observable<any> {
    return this.http.post(baseURL + this.path, logInfo);
    // .pipe(catchError(this.handleError));
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }

  logoutUser(): void {
    this.isloggedIn = false;
  }
}
