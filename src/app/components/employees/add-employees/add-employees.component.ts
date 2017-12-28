import { Component, OnInit } from '@angular/core';
import {FmisService} from '../../../services/fmis.service';
import {Employee} from '../../../modals/employee/Employee';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {

  // employee: Employee;
  employee = new Employee();
  heroes: Employee[];
  employeeForm: FormGroup;
  constructor(private fmisService: FmisService) { }

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
  addEmployee() {
    // name = name.trim();
    // if (!name) { return; }
    this.fmisService.addHero(this.employee)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  onSubmit(form: NgForm) {
    this.fmisService.addHero(this.employee)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
}
