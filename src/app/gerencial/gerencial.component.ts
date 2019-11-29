import { VendedorDto } from './../model/vendedor';
import { ClienteDto } from './../model/cliente';
import { ClienteService } from './../service/cliente.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-gerencial',
  templateUrl: './gerencial.component.html',
  styleUrls: ['./gerencial.component.css']
})
export class GerencialComponent implements OnInit {



  constructor(private clienteService: ClienteService) { }

  arquivo: ngxCsv;
  rows = [];
  temp = [];
  cliente: ClienteDto;
  ArrayCliente = [];

  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: false,
    title: 'Lista de Clientes',
    useBom: true,
    noDownload: false

  }

  columns = [{ prop: 'clienteId', }, { name: 'razaoSocial' },
  { name: 'Cod.Vendedor',  }, { name: 'Vendedor' }, { name: 'Distancia' }];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  ColumnMode = ColumnMode;


  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    this.temp = this.rows.filter(row => {
      return row.clienteId.toString().includes(val) || (row.razaoSocial && row.razaoSocial.toLowerCase().includes(val));
    });
  }

  ngOnInit() {
    this.carregarTudo();

  }

  carregarTudo() {
    this.clienteService.getClientes().subscribe(data => {
      this.rows = data;
      this.temp = data;
      console.log(data);
    });
  }


  distribuir() {

  }

  relatorio() {
    // this.arquivo = new ngxCsv(this.rows, 'teste', this.options);
   this.rows.forEach(element => {

    this.cliente = new ClienteDto();
    this.cliente.clienteId = element.clienteId;
    this.cliente.razaoSocial = element.razaoSocial;
    // this.cliente.vendedorDto.vendedorId = element.vendedorDto.vendedorId;
    // this.cliente.vendedorDto.nome = element.vendedorDto.nome;
    // this.cliente.distancia = element.distancia;
    this.ArrayCliente.push(this.cliente);
    console.log(element);
   });

   this.arquivo = new ngxCsv(this.ArrayCliente, 'teste', this.options);
  }


}
