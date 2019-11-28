import { ClienteDto } from './../model/cliente';
import { ClienteService } from './../service/cliente.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  @ViewChild('template', { static: true }) deleteModal;

  message: string;
  modalRef: BsModalRef;
  cliente: ClienteDto[];
  arquivo: ngxCsv;
  clienteSelecionado: ClienteDto;

  datas = [{
    name: "Test 1",
    age: 13,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  }];

     options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: false,
    title: 'Lista de Clientes',
    useBom: true,
    noDownload: false

  };


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

  confirm(){
    this.clienteService.deleteCliente(this.clienteSelecionado).subscribe(

    );

  }
  decline(){
    this.message = 'Declined!';
    this.modalRef.hide();
  }

  onClick()
  {
   this.arquivo = new ngxCsv(this.cliente, 'teste', this.options);
  }

  openModal(clienteId) {
    this.clienteSelecionado=clienteId;
    this.modalRef = this.modalService.show(this.deleteModal,{class: 'modal-sm'});
  }

}
