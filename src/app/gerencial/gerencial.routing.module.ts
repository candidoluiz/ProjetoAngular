import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { GerencialComponent } from './gerencial.component';

const gerencialRouters = [
  {path: 'gerencial', component: GerencialComponent},
];

@NgModule({
  imports: [RouterModule.forChild(gerencialRouters)],
  exports: [RouterModule]
})

export class GerencialRoutingModule {}
