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
        } else {

        this.formulario = this.formBuider.group({
          clienteId: [null],
          nome: [null],
          cnpj: [null, Validators.required],
          razaoSocial: [null],
          lat: [null],
          longi: [null]
          }); }

      });
    // let registro = null;
    // this.route.params
    // .pipe(
    //   map((params: any) => params['id']),
    //   switchMap(id => this.clienteService.getCliente(id))
    //   )
    // .subscribe(cliente => this.updateForm(cliente));

    // this.formulario = this.formBuider.group({
    //   clienteId: [null],
    //   nome: [null],
    //   cnpj: [null],
    //   razaoSocial: [null],
    //   lat: [null],
    //   longi: [null]
    // });

 }
      // updateForm(cliente) {
      // this.formulario.patchValue({
      // clienteId: cliente.clienteId,
      // nome: cliente.nome,
      // cnpj: cliente.cnpj,
      // razaoSocial: cliente.razaoSocial,
      // lat: cliente.lat,
      // longi: cliente.longi

      //   });
      // }

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
      this.carregarFormulario(this.cliente);
    });
  }


  carregarFormulario(cliente: ClienteDto) {
    this.formulario = this.formBuider.group({
      clienteId: [cliente.clienteId],
      nome: [cliente.nome],
      cnpj: [cliente.cnpj],
      razaoSocial: [cliente.razaoSocial],
      lat: [cliente.lat],
      longi: [cliente.longi]
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
