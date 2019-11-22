import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
//import { ClienteService } from "../service/cliente.service";

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css']
})
export class ClienteDetalheComponent implements OnInit {

  id: string;
  inscricao: Subscription;
  //clientes: ClienteDto[];

  constructor(private rota: ActivatedRoute) {}

  ngOnInit() {
   this.inscricao =  this.rota.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );

    /*this.servico.getCliente().subscribe(ret => {
      this.clientes = ret;
    });*/
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
