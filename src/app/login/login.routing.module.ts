import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login.component';

const loginRouters = [
  {path: '', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(loginRouters)],
  exports: [RouterModule]
})

export class LoginRoutingModule { }
