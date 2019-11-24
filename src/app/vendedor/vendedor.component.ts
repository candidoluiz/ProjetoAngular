import { VendedorService } from './../service/vendedor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  vendedor: any = [];

  constructor(private vendedorService: VendedorService) { }

  ngOnInit() {

    //this.vendedor = this.vendedorService.getVendedorTeste();
    this.caregarVendedor();
  }

  caregarVendedor()
  {
    return this.vendedorService.getVendedores().subscribe((data: {}) => {
      this.vendedor = data;
    })
  }

}
