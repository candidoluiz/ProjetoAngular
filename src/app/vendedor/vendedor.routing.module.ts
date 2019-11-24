import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { VendedorComponent } from './vendedor.component';
import { VendedorFormComponent } from './vendedor-form/vendedor-form.component';

const vendedoresRouting = [
  {path : 'vendedor' , component: VendedorComponent},
  {path : 'vendedor/:id/editar' , component: VendedorFormComponent},
  {path : 'vendedor/novo' , component: VendedorFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(vendedoresRouting)],
  exports: [RouterModule]
})

export class VendedorRoutingModule {}
