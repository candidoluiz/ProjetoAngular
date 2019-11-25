import { VendedorRoutingModule } from './vendedor.routing.module';
import { FormsModule } from '@angular/forms';
import { VendedorComponent } from './vendedor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendedorFormComponent } from './vendedor-form/vendedor-form.component';


@NgModule({
  declarations: [VendedorComponent, VendedorFormComponent],
  imports: [CommonModule, VendedorRoutingModule, FormsModule]
})

export class VendedorModule {}
