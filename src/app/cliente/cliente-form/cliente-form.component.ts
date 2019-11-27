import { ClienteDto } from './../../model/cliente';
import { ClienteService } from './../../service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  id: number = null;

  cliente: ClienteDto = new ClienteDto();

  inscricao: Subscription;

  formulario: FormGroup;

  constructor(private route: ActivatedRoute,
              private clienteService: ClienteService,
              private formBuider: FormBuilder) { }

  ngOnInit() {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        if ( this.id )
          this.carregarCliente(this.id);

        this.formulario = this.formBuider.group({
          clienteId: [this.id],
          nome: [this.cliente.nome],
          cnpj: [this.cliente.cnpj],
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

  onSubmit() {

    if ( this.formulario.valid ) {
      this.clienteService.addCliente(this.formulario.value).subscribe((formulario) => {
        console.log(this.formulario.value);

        //redireciona para a pagina de listagem
        //this.router.navigate(['/vendedor']);

        //reseta o form
        this.formulario.reset();
      });
    }
  }

  carregarCliente(id: number) {
   this.clienteService.getCliente(id).subscribe(data =>{
      this.cliente = data;
      console.log('a lista ', this.cliente);
    });
  }

}
