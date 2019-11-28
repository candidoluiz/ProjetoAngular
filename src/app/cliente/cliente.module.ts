import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ClienteRoutingModule } from './cliente.routing.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import {NgxMaskModule} from 'ngx-mask';
import { ModalModule,BsModalRef  } from 'ngx-bootstrap/modal';
import { ClienteComponent } from './cliente.component';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [ClienteComponent, ClienteFormComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgxMaskModule.forRoot(),
    ModalModule.forRoot(),
    MatTableModule,
    MatFormFieldModule,
    NgxDatatableModule
  ],


  exports: [],
  providers: [
    BsModalRef
],

})
export class ClienteModule { }
