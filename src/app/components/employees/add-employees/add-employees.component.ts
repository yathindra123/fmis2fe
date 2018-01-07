import { Component, OnInit } from '@angular/core';
import {Employee} from '../../../modals/employee/Employee';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {NgForm} from '@angular/forms';
import {EmployeeService} from '../../../services/employee.service';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {

  // room: Employee;
  employee = new Employee();
  employees: Employee[] = [];
  employeeForm: FormGroup;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  //   this.employeeForm = new FormGroup({
  //     name: new FormControl('', {
  //       validators: Validators.required,
  //       updateOn: 'change'
  //     }),
  //     password: new FormControl('', {
  //       validators: Validators.required,
  //       updateOn: 'change'
  //     }),
  //     email: new FormControl('', {
  //       validators: Validators.required,
  //       updateOn: 'change'
  //     }),
  //     empType: new FormControl('', {
  //       validators: Validators.required,
  //       updateOn: 'change'
  //     })
  //   });
  }
  addEmployee(employee: Employee) {
    // name = name.trim();
    // if (!name) { return; }
    this.employeeService.addEmployee(this.employee)
      .subscribe(hero => {
        this.employees.push(hero);
      });
  }

  onSubmit(form: NgForm) {
    this.employeeService.addEmployee(this.employee)
      .subscribe(hero => {
        this.employees.push(hero);
      });
  }

  checkEmployeeDetails(employee: Employee) {
      const regexp = new RegExp('^[1-9]\d{0,2}$');
      const test = regexp.test(this.employee.email);
      // window.alert('Invalid email'); // will display true
    if (test) {
      this.addEmployee(employee);
    } else {
      document.getElementsByClassName('regexAlert').item(0).innerHTML = 'Invalid email';
      document.getElementsByClassName('regexAlert').item(0);
    }
  }
}
