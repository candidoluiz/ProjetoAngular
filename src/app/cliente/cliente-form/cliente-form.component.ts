import { ClienteService } from './../../service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private clienteService: ClienteService, private formBuider: FormBuilder) { }

  ngOnInit() {

    this.formulario = this.formBuider.group({
      nome: [null, Validators.required],
      cnpj: [null, Validators.max(4)],
      razaoSocial: [null],
      lat: [null],
      longi: [null]
    });

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

    this.clienteService.addCliente(this.formulario.value).subscribe((formulario) => {
      console.log(this.formulario.value);

      //redireciona para a pagina de listagem
      //this.router.navigate(['/vendedor']);

      //reseta o form
      this.formulario.reset();
    });
  }

}
