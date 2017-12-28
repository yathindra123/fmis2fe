import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {Employee} from '../modals/employee/Employee';

@Injectable()
export class EmployeeService {
  employees: string[] = [];

  add(employee: string) {
    this.employees.push(employee);
  }

  clear() {
    this.employees = [];
  }
}
