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




  ngOnInit() {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        if ( this.id ) {
         this.carregarCliente(this.id);
        }

        this.formulario = this.formBuider.group({
          clienteId: [this.cliente.clienteId],
          nome: [this.cliente.nome],
          cnpj: [this.cliente.cnpj, Validators.required],
          razaoSocial: [this.cliente.razaoSocial],
          lat: [this.cliente.lat],
          longi: [this.cliente.longi]
          });

      });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  verificaValidTouched(campo){

    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  aplicationCssErro(campo){
    return{
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }


  salvar() {

   // if ( this.formulario.valid ) {
      this.clienteService.addCliente(this.formulario.value).subscribe((formulario) => {

        //redireciona para a pagina de listagem
        this.router.navigate(['/cliente']);

        //reseta o form
        //this.formulario.reset();
      });
   // }else{

   //     this.verificaValidacoesForm(this.formulario);
  //  }
  }

  carregarCliente(id: number) {
   this.clienteService.getCliente(id).subscribe(data =>{
      this.cliente = data;
      console.log('a lista ', this.cliente);
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  verificaValidacoesForm(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(campo =>{
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup)
      {
        this.verificaValidacoesForm(controle)
      }
    });

  }

}
