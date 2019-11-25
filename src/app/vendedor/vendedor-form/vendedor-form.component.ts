import { VendedorDto } from './../../model/vendedor';
import { VendedorService } from './../../service/vendedor.service';
import { Component, OnInit, NgModule } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vendedor-form',
  templateUrl: './vendedor-form.component.html',
  styleUrls: ['./vendedor-form.component.css']
})
export class VendedorFormComponent implements OnInit {


  onSubmit(form) {
    this.vendedorService.addVendedor(form.value).subscribe((forms) => {
      console.log(form.value);
      this.router.navigate(['/vendedor']);
    });

  }

  constructor(private vendedorService: VendedorService, private router: Router) { }

  ngOnInit() {
  }

}
