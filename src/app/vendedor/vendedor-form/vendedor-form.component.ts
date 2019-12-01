import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { VendedorDto } from './../../model/vendedor';
import { VendedorService } from './../../service/vendedor.service';
import { Component, OnInit, NgModule, TemplateRef } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vendedor-form',
  templateUrl: './vendedor-form.component.html',
  styleUrls: ['./vendedor-form.component.css']
})
export class VendedorFormComponent implements OnInit {

  constructor(
    private vendedorService: VendedorService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalService: BsModalService) {

     }

  id: number = null;
  inscricao: Subscription;
  vendedor: VendedorDto = new VendedorDto();
  formulario: FormGroup;
  modalRef: BsModalRef;



  onSubmit(form) {
    this.vendedorService.addVendedor(form.value).subscribe((forms) => {
      console.log(form.value);
      this.router.navigate(['/vendedor']);
    },
    );

  }

  ngOnInit() {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        if (this.id) {
          this.carregarVendedor(this.id);
        }

        this.formulario = this.formBuilder.group({
          vendedorId:[this.id],
          nome: [this.vendedor.nome],
          cpf: [this.vendedor.cpf, Validators.required],
          lat: [this.vendedor.lat],
          longi: [this.vendedor.longi]
        });

      });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  carregarVendedor(id) {
      this.vendedorService.getVendedor(id).subscribe(data => {
        this.vendedor = data;
        this.carregarFormulario(this.vendedor);
      });
  }

  carregarFormulario(vendedor: VendedorDto) {
    this.formulario = this.formBuilder.group({
      vendedorId:[vendedor.vendedorId],
      nome: [vendedor.nome],
      cpf: [vendedor.cpf, Validators.required],
      lat: [vendedor.lat],
      longi: [vendedor.longi]
      });
   }

  salvar()
  {
    this.vendedorService.addVendedor(this.formulario.value).subscribe(data =>{
      this.vendedor = data;
      this.router.navigate(['/vendedor']);
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }





}
