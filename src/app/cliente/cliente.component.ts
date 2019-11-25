import { ClienteDto } from './../model/cliente';
import { ClienteService } from './../service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: any = [];


  constructor(private clienteService: ClienteService) { }

  ngOnInit() {

    this.carregarClientes();
  }

  carregarClientes() {

    return this.clienteService.getClientes().subscribe((data: {}) => {
      this.cliente = data;
    });

  }

  editaCliente(cliente) {

  }

  excluiCliente() {

  }

}
