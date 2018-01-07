import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from './user.service';

@Injectable()
export class OnlyLoggedInUsersGuardService implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  // Checks whether user logged in
  canActivate() {

    // Make accessible
    if (this.userService.isLoggedIn()) {
      return true;
    } else {
      // Redirect to the login page
      this.router.navigate(['']);
      return false;
    }
  }


}
