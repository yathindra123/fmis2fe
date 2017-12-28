import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../../../modals/employee/Employee';
import {Observable} from 'rxjs/Observable';
import {EmployeeService} from '../../../services/employee.service';
import {FmisService} from '../../../services/fmis.service';
// import {catchError, tap} from "rxjs/operators";
@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private fmisService: FmisService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.fmisService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }
}
