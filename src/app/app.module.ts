import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { ClienteService } from './service/cliente.service';
import { VendedorService } from './service/vendedor.service';
import { VendedorModule } from './vendedor/vendedor.module';
import { ClienteModule } from './cliente/cliente.module';
import { LoginService } from './service/login.service';
import { LoginModule } from './login/login.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { GerencialModule } from './gerencial/gerencial.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    ClienteModule,
    VendedorModule,
    LoginModule,
    routing,
    ModalModule.forRoot(),
    BrowserModule,
    NgxDatatableModule,
    GerencialModule,


  ],
  exports: [],
  providers: [ClienteService, VendedorService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
