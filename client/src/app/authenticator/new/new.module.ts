import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';

@NgModule({
  imports: [
    CommonModule,
    NewRoutingModule
  ],
  declarations: [NewComponent]
})
export class NewModule { }
