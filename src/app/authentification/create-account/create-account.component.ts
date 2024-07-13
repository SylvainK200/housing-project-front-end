import {Component} from '@angular/core';
import {RegistrationUserRequest} from "../models/registration-user-request.model";
import {AuthenticationService} from "../service/authentification.service";
import {Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {

  registerRequest: RegistrationUserRequest = new RegistrationUserRequest();
  errorMessage: Array<string> = [];

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }
  register() {
    this.authenticationService.register(this.registerRequest, new HttpParams()).subscribe(
      (response )=> {
        console.log('Well registerated');
        //this.router.navigate(["/auth/activate-account"])
      },
      err => {
        this.errorMessage.push(err);
        console.log(err);
      },
    );

  }

  returnLogin() {
      this.router.navigate(['/auth/login']);
  }
}
