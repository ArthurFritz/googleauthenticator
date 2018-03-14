import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenewRoutingModule } from './renew-routing.module';
import { RenewComponent } from './renew.component';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { RenewService } from "./renew.service";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatProgressSpinnerModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    RenewRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  declarations: [RenewComponent],
  providers:[HttpClient, RenewService]
})
export class RenewModule { }
