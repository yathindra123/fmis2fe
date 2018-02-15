import { Component, OnInit } from '@angular/core';
import {Employee} from '../../../../modals/employee/Employee';
import {EmployeeService} from '../../../../services/employee.service';
import {TransferService} from '../../../../services/transfer.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  employee= new Employee();
  employees: Employee[];

  constructor(private employeeService: EmployeeService, private tranferService: TransferService) { }

  onSubmit(form: NgForm) {
    console.log(form);
    this.employeeService.updateEmployee(this.employee)
      .subscribe(emp => {
        this.employees.push(emp);
      });
  }

  update(employee): void {
    // console.log(room);
    this.addChanges(employee);
    this.employeeService.updateEmployee(this.tranferService.getEmployee())
      .subscribe(() => console.log(this.employee));
  }
  addChanges(employee) {
    // this.tranferService.setMove(cost);
    this.tranferService.editEmployee(employee);
  }

}
