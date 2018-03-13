import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { MatInputModule, MatButtonModule } from "@angular/material";
import { FormBuilder, ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { NewService } from "./new.service";

@NgModule({
  imports: [
    CommonModule,
    NewRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    HttpClientModule
  ],
  declarations: [NewComponent],
  providers:[FormBuilder, HttpClient, NewService]
})
export class NewModule { }
