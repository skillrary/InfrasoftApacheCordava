import { Injectable } from '@angular/core';
import { ILogin } from '../login/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(userObject: ILogin) {
    console.log(userObject);
  }
}
