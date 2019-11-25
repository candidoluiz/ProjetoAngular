import { ClienteService } from './../../service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {

    this.formulario = new FormGroup({
      nome: new FormControl(null),
      cnpj: new FormControl(null),
      razaoSocial: new FormControl(null),
      lat: new FormControl(null),
      longi: new FormControl(null)
    });

  }

  onSubmit() {
    //console.log(this.formulario.value);

    this.clienteService.addCliente(this.formulario.value).subscribe((forms) => {
      console.log(this.formulario.value);

      //redireciona para a pagina de listagem
      //this.router.navigate(['/vendedor']);

      //reseta o form
      this.formulario.reset();
    },
    (error: any) => alert('erro'));
  }

}
