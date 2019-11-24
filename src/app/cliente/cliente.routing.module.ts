import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

const clientesRouters = [
  {path: 'cliente', component: ClienteComponent},
  {path: 'cliente/:id/editar', component: ClienteFormComponent},
  {path: 'cliente/novo', component: ClienteFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(clientesRouters)],
  exports: [RouterModule]
})

export class ClienteRoutingModule{}
