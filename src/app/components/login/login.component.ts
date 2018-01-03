import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {User} from '../../modals/user/User';
import {Employee} from '../../modals/employee/Employee';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  newUser: User[] = [];
  constructor(private loginService: LoginService, private router: Router) { }

  employee = new Employee();
  // loginForm: FormGroup;
  // firstName: FormControl;
  // lastName: FormControl;
  // email: FormControl;
  // password: FormControl;
  // language: FormControl;
  //
  //
  // ngOnInit() {
  //   this.createFormControls();
  //   this.createForm();
  // }
  //
  // createFormControls() {
  //   this.firstName = new FormControl('', Validators.required);
  //   this.lastName = new FormControl('', Validators.required);
  //   this.email = new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('[^ @]*@[^ @]*')
  //   ]);
  //   this.password = new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(8)
  //   ]);
  //   this.language = new FormControl('');
  // }
  //
  // createForm() {
  //   this.loginForm = new FormGroup({
  //     name: new FormGroup({
  //       firstName: this.firstName,
  //       lastName: this.lastName,
  //     }),
  //     email: this.email,
  //     password: this.password,
  //     language: this.language
  //   });
  // }

  // constructor(private router: Router, private user:  LoginService) {
  // }
  //
  // myLogin(myForm: NgForm) {
  //   console.log('Successful registration');
  //   this.user.setUserLoggedIn();
  //   console.log(myForm);
  // }
  // ngOnInit() {
  // }
  //
  // loginUser(e) {
  //   e.preventDefault();
  //   const userName = e.target.elements[0].value;
  //   const password = e.target.elements[1].value;
  //   console.log(userName, password);
  //
  //   if (userName === 'admin@mail.com' && password === 'admin') {
  //     console.log('successfully logged in');
  //     this.router.navigate(['/user']);
  //   } else {
  //     console.log('Invalid');
  //   }
  //
  // }


  // room: Employee;


  // addEmployee() {
  //   // name = name.trim();
  //   // if (!name) { return; }
  //   this.loginService.addHero(this.employee)
  //     .subscribe(hero => {
  //       this.users.push(hero);
  //     });
  // }

  // onSubmit(form: NgForm) {
  //   console.log(this.employee);
  //   this.loginService.getUser()
  //     .subscribe(users => {
  //       this.users.push(users);
  //     });
  // }

  onSubmit(form: NgForm) {
    this.loginService.getUser(this.employee.email, this.employee.password)
      .subscribe(users => {
        console.log(users);
        if (users != null) {
          // new UserService().changeLogStatus();
          if (users[0].empType = '') {

          } else {

          }
          UserService.logStatus = true;
          this.router.navigate(['/user']);
        } else {
          // Re enter the password
        }
      });
  }
}
