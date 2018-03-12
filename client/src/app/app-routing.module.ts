import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import { AuthenticatorModule } from './authenticator/authenticator.module';

const routes: Routes = [
    { path: 'authenticator', loadChildren: './authenticator/authenticator.module#AuthenticatorModule' },
    { path: '**', redirectTo: '/authenticator', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })]
})
export class AppRoutingModule {}

