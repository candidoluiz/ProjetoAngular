import { map, switchMap } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/';
import { ClienteDto } from './../../model/cliente';
import { ClienteService } from './../../service/cliente.service';
import { Component, OnInit, TemplateRef  } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clienteService: ClienteService,
              private formBuider: FormBuilder,
              private modalService: BsModalService ) { }

  modalRef: BsModalRef;
  id: number = null;

  cliente: ClienteDto = new ClienteDto();

  inscricao: Subscription;

  formulario: FormGroup;
  teste: any;

  ngOnInit() {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        if ( this.id ) {
          this.carregarCliente(this.id);
        }

        this.formulario = this.formBuider.group({
          clienteId: [null],
          cnpj: [null, Validators.required],
          razaoSocial: [null, Validators.required],
          lat: [null, Validators.required],
          longi: [null, Validators.required]
          });

      });

  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  verificaValidTouched(campo: string) {

    return (!this.formulario.get(campo).valid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty));
  }

  aplicationCssErro(campo: string) {
    return{
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  salvar() {
    if (this.formulario.valid) {
      this.clienteService.addCliente(this.formulario.value).subscribe((formulario) => {
        this.router.navigate(['/cliente']);
      });
    } else {
      console.log("fomulario invalido");
      this.verificaValidacoesForm(this.formulario);
    }
  }

  carregarCliente(id: number) {
   this.clienteService.getCliente(id).subscribe(data =>{
      this.cliente = data;
      console.log('a lista ', this.cliente);
      this.formulario = this.formBuider.group({
        clienteId: [this.cliente.clienteId],
        cnpj: [this.cliente.cnpj, Validators.required],
        razaoSocial: [this.cliente.razaoSocial],
        lat: [this.cliente.lat],
        longi: [this.cliente.longi]
        });

    });
  }

  // carregarFormulario(cliente: ClienteDto) {
  //   this.formulario = this.formBuider.group({
  //     clienteId: [cliente.clienteId],
  //     cnpj: [cliente.cnpj],
  //     razaoSocial: [cliente.razaoSocial],
  //     lat: [cliente.lat],
  //     longi: [cliente.longi]
  //     });
  //  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  verificaValidacoesForm(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });

  }

}
