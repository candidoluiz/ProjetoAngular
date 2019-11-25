import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClienteRoutingModule } from './cliente.routing.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';


import { ClienteComponent } from './cliente.component';


@NgModule({
  declarations: [ClienteComponent, ClienteFormComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ClienteModule { }
