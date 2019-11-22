import { ClienteService } from './../service/cliente.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: any[];



  constructor(private clienteService: ClienteService) { }

  ngOnInit() {

    this.cliente = this.clienteService.getClienteTeste();
  }

}
