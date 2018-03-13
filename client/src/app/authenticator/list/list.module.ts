import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import {ListComponent} from './list.component';
import { MatTableModule, MatIconModule, MatButtonModule, MatTooltipModule } from '@angular/material';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ListService } from "./list.service";

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatTooltipModule
  ],
  declarations: [ListComponent],
  providers:[HttpClient, ListService]
})
export class ListModule { }
