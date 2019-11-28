import { ClienteDto } from './../model/cliente';
import { ClienteService } from './../service/cliente.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/';
import {MatTableDataSource} from '@angular/material/table';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-cliente',
  templateUrl: 'cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})

export class ClienteComponent implements OnInit {


 @ViewChild('template', { static: true }) deleteModal;



  message: string;
  modalRef: BsModalRef;
  cliente: ClienteDto[];
  arquivo: ngxCsv;
  clienteSelecionado: ClienteDto;
  lista: MatTableDataSource<ClienteDto>;

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




  constructor(private clienteService: ClienteService, private modalService: BsModalService) { }


  ngOnInit() {

    this.carregarClientes();

  }


  carregarClientes() {

     this.clienteService.getClientes().subscribe(data => {
       this.cliente = data;
     });
  }

  editaCliente(cliente) {

  }

  confirm() {
    this.clienteService.deleteCliente(this.clienteSelecionado).subscribe(
        success => this.carregarClientes()

    );
    this.modalRef.hide();

  }
  decline() {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

  onClick() {
   this.arquivo = new ngxCsv(this.cliente, 'teste', this.options);
  }

  openModal(clienteId) {
    this.clienteSelecionado = clienteId;
    this.modalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
  }

}
