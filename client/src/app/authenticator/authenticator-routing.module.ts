import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatorComponent } from './authenticator.component';

const routes: Routes = [
  { path: 'list', loadChildren : './list/list.module#ListModule' },
  { path: 'new', loadChildren : './new/new.module#NewModule' },
  { path: 'validate', loadChildren : './validate/validate.module#ValidateModule' },
  { path: 'renew', loadChildren : './renew/renew.module#RenewModule' },
  { path: '**', component : AuthenticatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatorRoutingModule { }
