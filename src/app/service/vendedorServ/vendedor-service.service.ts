import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { VendedorDto } from '../../model/vendedor';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:5000/api/produto';

@Injectable({
  providedIn: 'root'
})
export class VendedorServiceService {

  constructor(private http: HttpClient) { }

  getVendedores(): Observable<VendedorDto[]>{
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
}
