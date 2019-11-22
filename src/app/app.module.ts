import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { ClienteService } from './service/cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    VendedorComponent,
    LoginComponent,
    HomeComponent,
    ClienteDetalheComponent,
    VendedorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,

    routing
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
