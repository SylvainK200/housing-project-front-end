import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import {AuthenticationRoutingModule} from "./authentication-routing.module";
import {FormsModule} from "@angular/forms";
import {CodeInputModule} from "angular-code-input";



@NgModule({
  declarations: [
    LoginComponent,
    CreateAccountComponent,
    ActivateAccountComponent
  ],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        FormsModule,
        CodeInputModule
    ],
  providers: [
  ]
})
export class AuthentificationModule { }
