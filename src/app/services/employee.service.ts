import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {Employee} from '../modals/employee/Employee';

// Http Options
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {
  employees: string[] = [];

  // URL to connect
  private employeesUrl = 'http://localhost:8080/employees';

  // Create constructor
  constructor(
    private http: HttpClient) { }

  // Get all employees
  getEmployees (): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl)
      .pipe(
        tap(employees => this.log(`fetched employees`)),
        catchError(this.handleError('getEmployees', []))
      );
  }

  // Add to the log
  add(employee: string) {
    this.employees.push(employee);
  }

  // clear log
  clear() {
    this.employees = [];
  }

  // Update employee
  updateEmployee (employee: Employee): Observable<Employee> {
    const empId = typeof employee === 'number' ? employee : employee.empId;
    console.log(employee.empId);
    const url = `${this.employeesUrl}/${empId}`;
    return this.http.put(url, employee, httpOptions).pipe(
      tap(_ => this.log(`updated employee=${employee}`)),
      catchError(this.handleError<any>('updateEmployee'))
    );
  }

  // Add an employee
  addEmployee (employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeesUrl, employee, httpOptions).pipe(
      tap((employee2: Employee) => this.log(`added employee w/ id=${employee2.empId}`)),
      catchError(this.handleError<Employee>('addEmployee'))
    );
  }

  // Delete an employee
  deleteEmployee (employee: Employee | number): Observable<Employee> {
    const id = typeof employee === 'number' ? employee : employee.empId;
    const url = `${this.employeesUrl}/${id}`;
    console.log('Id: ' + id);
    return this.http.delete<Employee>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted employee id=${id}`)),
      catchError(this.handleError<Employee>('deleteEmployee'))
    );
  }

  // Handle the error
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // Print the error object
      console.error(error);

      // Add to the log
      this.log(`${operation} failed: ${error.empId}`);

      // return empty result to keep running
      return of(result as T);
    };
  }

  // Log employee to the employee service
  private log(employee: string) {
    this.add('EmployeeService: ' + employee);
  }
}
