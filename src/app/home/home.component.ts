import { Component, OnInit } from '@angular/core';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   datas: any[];
   arquivo: ngxCsv;

  constructor() { }

  ngOnInit() {
     this.datas = [
      {
        name: "Test 1",
        age: 13,
        average: 8.2,
        approved: true,
        description: "using 'Content here, content here' "
      },];
  }

  onClick()
  {
   this.arquivo = new ngxCsv(this.datas,'teste');
  }

}
