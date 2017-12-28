import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private user:  LoginService) {
  }

  myLogin(myForm: NgForm) {
    console.log('Successful registration');
    this.user.setUserLoggedIn();
    console.log(myForm);
  }
  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    const userName = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    console.log(userName, password);

    if (userName === 'admin@mail.com' && password === 'admin') {
      console.log('successfully logged in');
      this.router.navigate(['/user']);
    } else {
      console.log('Invalid');
    }

  }
}
