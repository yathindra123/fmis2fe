import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {User} from '../modals/user/User';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class LoginService {

  users: String[] = [];
  private loginUrl = 'http://localhost:8080/login';  // URL to web api

  constructor(
    private http: HttpClient) { }

  // getUser(): Observable<User> {
  //   const url = `${this.loginUrl}`;
  //   return this.http.get<User>(url).pipe(
  //     tap(_ => this.log(`fetched hero id`)),
  //     catchError(this.handleError<User>(`getUser id`))
  //   );
  // }

  getUser (email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(this.loginUrl, {
      params: {
        email: email,
        password: password
      },
    })
      .pipe(
        tap(employees => this.log(`fetched employees`)),
        catchError(this.handleError('getEmployees', []))
      );
  }
  // private isUserLoggedIn;
  // private username;
  // constructor() {
  //   this.isUserLoggedIn = false;
  // }
  //
  // setUserLoggedIn() {
  //   this.isUserLoggedIn = true;
  // }
  // getUserLoggedIn() {
  //   return this.isUserLoggedIn;
  // }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.user}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(user: string) {
    this.add('EmployeeService: ' + user);
  }
  add(user: string) {
    this.users.push(user);
  }

  clear() {
    this.users = [];
  }
}
