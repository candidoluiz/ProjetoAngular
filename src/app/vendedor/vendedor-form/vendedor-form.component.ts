import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { VendedorDto } from './../../model/vendedor';
import { VendedorService } from './../../service/vendedor.service';
import { Component, OnInit, NgModule } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vendedor-form',
  templateUrl: './vendedor-form.component.html',
  styleUrls: ['./vendedor-form.component.css']
})
export class VendedorFormComponent implements OnInit {

  id;
  inscricao: Subscription;
  vendedor: VendedorDto = new VendedorDto();
  formulario: FormGroup;



  onSubmit(form) {
    this.vendedorService.addVendedor(form.value).subscribe((forms) => {
      console.log(form.value);
      this.router.navigate(['/vendedor']);
    },
    );

  }

  constructor(
    private vendedorService: VendedorService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {

     }

  ngOnInit() {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        if (this.id)
          this.carregarVendedor(this.id);

        this.formulario = this.formBuilder.group({
          vendedorId:[this.id],
          nome: [this.vendedor.nome],
          cpf: [this.vendedor.cpf],
          lat: [this.vendedor.lat],
          longi: [this.vendedor.longi]
        });

      });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  carregarVendedor(id)
  {
      this.vendedorService.getVendedor(id).subscribe(data => {
        this.vendedor = data;
        console.log(this.vendedor);
      });
  }




}
