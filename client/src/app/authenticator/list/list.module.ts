import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import {ListComponent} from './list.component';
import { MatTableModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [ListComponent]
})
export class ListModule { }
