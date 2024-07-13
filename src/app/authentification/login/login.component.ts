import {Component, inject} from '@angular/core';
import {AuthenticationRequest} from "../models/authentication-request.model";
import {Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";
import {AuthenticationService} from "../service/authentification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authRequest: AuthenticationRequest = new AuthenticationRequest();
  errorMessage: Array<string> = [];

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }
  login() {
    this.authenticationService.authenticate(this.authRequest, new HttpParams()).subscribe(
      (response )=> {
        console.log('Well authenticated');
        //this.router.navigate(["/auth/activate-account"])
      },
      err => {
        this.errorMessage.push(err);
        console.log(err);
      },
    );
  }

  register() {
    this.router.navigate(['/auth/register']);

  }
}
