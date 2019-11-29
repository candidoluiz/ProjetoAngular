import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerencialRoutingModule } from './gerencial.routing.module';
import { GerencialComponent } from './gerencial.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [GerencialComponent],
  imports: [
    GerencialRoutingModule,
    NgxDatatableModule,
    CommonModule,
    BrowserModule
  ]
})
export class GerencialModule { }
