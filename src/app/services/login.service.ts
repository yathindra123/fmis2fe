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

  // URL to connect
  private loginUrl = 'http://localhost:8080/login';

  // Create constructor
  constructor(
    private http: HttpClient) { }

  // Get user document from the database
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

  // Handle the error
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // Print the error object
      console.error(error);

      // Add to the log
      this.log(`${operation} failed: ${error.user}`);

      // return empty result to keep running
      return of(result as T);
    };
  }

  // Log item to the employee service
  private log(user: string) {
    this.add('EmployeeService: ' + user);
  }

  // Add to the log
  add(user: string) {
    this.users.push(user);
  }

  // Clear the log
  clear() {
    this.users = [];
  }
}
