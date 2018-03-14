import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidateRoutingModule } from './validate-routing.module';
import { ValidateComponent } from './validate.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatInputModule, MatToolbarModule } from "@angular/material";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ValidateService } from "./validate.service";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ValidateRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    MatToolbarModule
  ],
  declarations: [ValidateComponent],
  providers: [HttpClient, ValidateService, FormBuilder]
})
export class ValidateModule { }
