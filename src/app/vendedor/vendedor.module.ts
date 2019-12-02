import { VendedorRoutingModule } from './vendedor.routing.module';
import { VendedorComponent } from './vendedor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendedorFormComponent } from './vendedor-form/vendedor-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



import {NgxMaskModule} from 'ngx-mask';
import { ModalModule,BsModalRef  } from 'ngx-bootstrap/modal';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [VendedorComponent, VendedorFormComponent],
  imports: [CommonModule,
    VendedorRoutingModule,
    FormsModule,
    RouterModule,
    NgxMaskModule.forRoot(),
    ModalModule.forRoot(),
    MatFormFieldModule,
    NgxDatatableModule,
    MatTableModule,
    ReactiveFormsModule],

    exports: [],
    providers: [
      BsModalRef
  ],
})

export class VendedorModule {}
