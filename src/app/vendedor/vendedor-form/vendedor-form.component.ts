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

  id: string;
  inscricao: Subscription;


  onSubmit(form) {
    this.vendedorService.addVendedor(form.value).subscribe((forms) => {
      console.log(form.value);
      this.router.navigate(['/vendedor']);
    },
    );

  }

  constructor(private vendedorService: VendedorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      });
  }

}
