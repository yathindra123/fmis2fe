import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {User} from '../../modals/user/User';
import {Employee} from '../../modals/employee/Employee';
import {UserService} from '../../services/user.service';
import {TransferService} from '../../services/transfer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  newUsers: any;

  // Create the constructor
  constructor(private loginService: LoginService, private router: Router, private transferService: TransferService) { }

  employee = new Employee();

  // When the user submit the form this will check the user credentials
  onSubmit() {
    this.loginService.getUser(this.employee.email, this.employee.password)
      .subscribe(users => {
        this.newUsers = users;
        if (this.newUsers !== null) {
          if (this.newUsers.empType === 'admin') {
            UserService.logStatus = true;
            this.router.navigate(['/admin']);
          } else {
            UserService.logStatus = true;
            TransferService.employeeName = this.newUsers.name;
            this.router.navigate(['/user']);
          }
        } else {
          window.alert('Incorrect user credentials');
        }
      });
  }
}
