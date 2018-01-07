import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  static logStatus = false;

  // Change log status to true, after user logged in with valid credentials
  changeLogStatus(): void {
    UserService.logStatus = true;
  }

  // Check whether user logged in
  isLoggedIn(): boolean {
    return UserService.logStatus;
  }

}
