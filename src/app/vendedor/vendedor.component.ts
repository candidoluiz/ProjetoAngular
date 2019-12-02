import { VendedorDto } from './../model/vendedor';
import { Router } from '@angular/router';
import { VendedorService } from './../service/vendedor.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/';
import { ngxCsv } from 'ngx-csv';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {
  @ViewChild('template', { static: true }) deleteModal;

  message: string;
  modalRef: BsModalRef;
  endedorDto: VendedorDto[];
  arquivo: ngxCsv;
  vendedorSelecionado: VendedorDto;
  vendedor: VendedorDto[];

  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: false,
    title: 'Lista de Vendedores',
    useBom: true,
    noDownload: false

  };

  constructor(private vendedorService: VendedorService, private router: Router, private modalService: BsModalService) { }

  ngOnInit() {
    this.caregarVendedor();
  }

  caregarVendedor()
  {
      this.vendedorService.getVendedores().subscribe(data => {
      this.vendedor = data;
    });
  }

  editButtonCick(id) {
    this.router.navigate(['/vendedor', id , 'editar']);
  }

  confirm() {
    this.vendedorService.deleteVendedor(this.vendedorSelecionado).subscribe(
        success => this.caregarVendedor()

    );
    this.modalRef.hide();

  }
  decline() {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

  exportarCrv() {
    this.arquivo = new ngxCsv(this.vendedor, 'teste', this.options);
   }

  openModal(vendedorId) {
    this.vendedorSelecionado = vendedorId;
    this.modalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
  }


}
