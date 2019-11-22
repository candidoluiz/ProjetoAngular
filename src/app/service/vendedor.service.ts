import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { VendedorDto } from '../model/vendedor';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:5000/api/produto';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private http: HttpClient) { }

  getVendedores(): Observable<VendedorDto[]> {
    return this.http.get<VendedorDto[]>(apiUrl)
    .pipe(
      tap(vendedores => console.log('leu os vendedores')),
      catchError(this.handleError('getVendedoresDto', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getVendedor(id: number): Observable<VendedorDto> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<VendedorDto>(url).pipe(
      tap(_ => console.log(`leu o vendedor id=${id}`)),
      catchError(this.handleError<VendedorDto>(`getVendedor id=${id}`))
    );
  }

  addVendedor(vendedor): Observable<VendedorDto>{
    return this.http.post<VendedorDto>(apiUrl, vendedor, httpOptions).pipe(
      tap((vendedor: VendedorDto) => console.log(`adicionou o vendedor com w/ id=${vendedor.vendedorId}`)),
      catchError(this.handleError<VendedorDto>('addVendedor')));
  }

  updateVendedor(id, vendedor): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, vendedor, httpOptions).pipe(
      tap(_ => console.log(`atualiza o vendedor com id=${id}`)),
      catchError(this.handleError<any>('updateVendedor'))
    );
  }

  deleteProduto(id): Observable<VendedorDto> {
    const url = `${apiUrl}/delete/${id}`;

    return this.http.delete<VendedorDto>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o vendedor com id=${id}`)),
      catchError(this.handleError<VendedorDto>('deleteVendedor'))
    );
  }
}
