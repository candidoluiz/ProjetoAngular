import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioDto } from '../model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioDto = new UsuarioDto();

  private teste: string;

  constructor(private logar: LoginService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.usuario);
  }

}
