import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenewRoutingModule } from './renew-routing.module';
import { RenewComponent } from './renew.component';

@NgModule({
  imports: [
    CommonModule,
    RenewRoutingModule
  ],
  declarations: [RenewComponent]
})
export class RenewModule { }
