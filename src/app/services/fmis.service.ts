import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {EmployeeService} from './employee.service';
import {Employee} from '../modals/employee/Employee';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class FmisService {

  private heroesUrl = 'http://localhost:8080/employees';  // URL to web api

  constructor(
    private http: HttpClient,
    private employeeService: EmployeeService) { }

  // Get all employees
  getEmployees (): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.heroesUrl)
      .pipe(
        tap(employees => this.log(`fetched employees`)),
        catchError(this.handleError('getEmployees', []))
      );
  }

  // /** GET hero by id. Return `undefined` when id not found */
  // getHeroNo404<Employee>(id: number): Observable<Employee> {
  //   const url = `${this.heroesUrl}/?id=${id}`;
  //   return this.http.get<Employee[]>(url)
  //     .pipe(
  //       map(employees => employees[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} hero id=${id}`);
  //       }),
  //       catchError(this.handleError<Employee>(`getHero id=${id}`))
  //     );
  // }

  /** GET hero by id. Will 404 if id not found */
  getEmployee(id: number): Observable<Employee> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Employee>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Employee>(`getHero id=${id}`))
    );
  }

  /* GET heroes whose name contains searchEmployee term */
  searchHeroes(term: string): Observable<Employee[]> {
    if (!term.trim()) {
      // if not searchEmployee term, return empty hero array.
      return of([]);
    }
    return this.http.get<Employee[]>(`http://localhost:8080/employees/${term}`).pipe(
      tap(_ => console.log('Found')),
      catchError(this.handleError<Employee[]>('searchHeroes', []))
    );
  }

  ////// Save methods //////////

  /** POST: add a new hero to the server */
  addHero (employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.heroesUrl, employee, httpOptions).pipe(
      tap((employee2: Employee) => this.log(`added hero w/ id=${employee2.empId}`)),
      catchError(this.handleError<Employee>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero (employee: Employee | number): Observable<Employee> {
    const id = typeof employee === 'number' ? employee : employee.empId;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Employee>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Employee>('deleteHero'))
    );
  }

  /** PUT: update the hero on the server */
  updateHero (employee: Employee): Observable<any> {
    return this.http.put(this.heroesUrl, employee, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${employee.empId}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }




  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.employee}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(employee: string) {
    this.employeeService.add('EmployeeService: ' + employee);
  }
}
