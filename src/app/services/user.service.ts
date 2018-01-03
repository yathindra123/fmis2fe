import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  static logStatus = false;

  changeLogStatus(): void {
    UserService.logStatus = true;
  }
  isLoggedIn(): boolean {
    console.log(UserService.logStatus);
    return UserService.logStatus;
  }

}
