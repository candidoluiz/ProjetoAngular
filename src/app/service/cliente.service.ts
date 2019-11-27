import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { ClienteDto } from '../model/cliente';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:8080/cliente';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(
    private http: HttpClient) { }

  getClientes(): Observable<ClienteDto[]> {
    return this.http.get<ClienteDto[]>(apiUrl)
    .pipe(
      tap(clientes => console.log('leu os clientes')),
      catchError(this.handleError('getVendedoresDto', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      alert('erro');
      return of(result as T);
    };
  }

  getCliente(id: number): Observable<ClienteDto> {

    const url = `${apiUrl}/${id}`;
    return this.http.get<ClienteDto>(url).pipe(
      //tap(_ => console.log(`leu o cliente id=${id}`)),
      catchError(this.handleError<ClienteDto>(`getCliente id=${id}`))
    );
  }

  addCliente(cliente): Observable<ClienteDto>{
    return this.http.post<ClienteDto>(apiUrl, cliente, httpOptions).pipe(
      tap((cliente: ClienteDto) => {
        console.log(`adicionou o cliente com w/ id=${cliente.clienteId}`)
      }),
      catchError(this.handleError<ClienteDto>('addCliente')));
  }
/*
  updateCliente(id, cliente): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, cliente, httpOptions).pipe(
      tap(_ => console.log(`atualiza o cliente com id=${id}`)),
      catchError(this.handleError<any>('updateCliente'))
    );
  }

  deleteCliente(id): Observable<ClienteDto> {
    const url = `${apiUrl}/delete/${id}`;

    return this.http.delete<ClienteDto>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o cliente com id=${id}`)),
      catchError(this.handleError<ClienteDto>('deleteCliente'))
    );
  }
*/
  getClienteTeste() {
    return[
      {clienteId: 1, nome: 'Luiz', cnpj: 123456, razaoSocial: 6656, lat: 9999, longi: 55555},
      {clienteId: 2, nome: 'Fernando', cnpj: 654321, razaoSocial: 7787, lat: 2222, longi: 4444},
    ];
  }
}
