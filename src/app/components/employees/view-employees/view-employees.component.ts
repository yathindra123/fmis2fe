import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../../../modals/employee/Employee';
import {Observable} from 'rxjs/Observable';
import {EmployeeService} from '../../../services/employee.service';
import {TransferService} from '../../../services/transfer.service';
// import {catchError, tap} from "rxjs/operators";
@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private transferService: TransferService ) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  deleteEmployee (employee: Employee): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.employees = this.employees.filter(h => h !== employee);
      this.employeeService.deleteEmployee(employee).subscribe();
    }
  }
  editEmployee(employee: Employee) {
    this.transferService.setEmployee(employee);
  }
}
