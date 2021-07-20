import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILogin } from '../login/login.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService
  ) { }

  login(userObject: ILogin) {
    console.log(userObject);
  }

  getUserList(): Observable<any> {
    return this.apiService.get(environment.base_url + "users?page=1");
  }
}
