import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoginService {

  private usuarioAutenticado: boolean = false;

 private logedIn = new BehaviorSubject<boolean>(false);
}
