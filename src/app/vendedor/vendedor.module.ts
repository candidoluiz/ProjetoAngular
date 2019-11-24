import { VendedorRoutingModule } from './vendedor.routing.module';
import { VendedorComponent } from './vendedor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendedorFormComponent } from './vendedor-form/vendedor-form.component';


@NgModule({
  declarations: [VendedorComponent, VendedorFormComponent],
  imports: [CommonModule, VendedorRoutingModule]
})

export class VendedorModule {}
