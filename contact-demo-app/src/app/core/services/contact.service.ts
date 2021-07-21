import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private api: ApiService
  ) { }

  list(): Observable<any> {
    return this.api.get(environment.api_url + 'contacts.php');
  }

  add(contactObj): Observable<any> {
    console.log(contactObj);

    let phones =  [];
    contactObj.phones.forEach(element => {
      phones.push(element.phone);
    });

    let emails =  [];
    contactObj.emails.forEach(element => {
      emails.push(element.email);
    });

    const formData = new FormData();

    formData.set('name', contactObj.name);
    formData.set('surnames', contactObj.surnames);
    formData.set('phones', JSON.stringify(phones));
    formData.set('emails', JSON.stringify(emails));
    formData.set('method', 'Add');

    return this.api.post(environment.api_url + 'contacts.php', formData);
  }

  delete() {
  }

  update() {
  }
}
