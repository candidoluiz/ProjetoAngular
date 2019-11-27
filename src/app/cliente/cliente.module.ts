import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ClienteRoutingModule } from './cliente.routing.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import {NgxMaskModule} from 'ngx-mask';


import { ClienteComponent } from './cliente.component';
import { from } from 'rxjs';



@NgModule({
  declarations: [ClienteComponent, ClienteFormComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgxMaskModule.forRoot()
  ],

})
export class ClienteModule { }
