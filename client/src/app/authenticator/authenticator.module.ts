import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticatorRoutingModule } from './authenticator-routing.module';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { ValidateComponent } from './validate/validate.component';
import { AuthenticatorComponent } from './authenticator.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticatorRoutingModule,
  ],
  declarations: [AuthenticatorComponent]
})
export class AuthenticatorModule { }
