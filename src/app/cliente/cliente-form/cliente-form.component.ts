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

  id: string;
  inscricao: Subscription;

  formulario: FormGroup;

  constructor(private route: ActivatedRoute,
              private clienteService: ClienteService,
              private formBuider: FormBuilder) { }

  ngOnInit() {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      });

      if(!this.id) {
        this.formulario = this.formBuider.group({
          nome: ['null', Validators.required],
          cnpj: [null],
          razaoSocial: [null],
          lat: [null],
          longi: [null]
        });
      }



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

}
