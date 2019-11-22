import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { LoginComponent } from './login/login.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { VendedorComponent } from './vendedor/vendedor.component';



const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'cliente/:id', component: ClienteDetalheComponent},
  {path: 'vendedor', component: VendedorComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
