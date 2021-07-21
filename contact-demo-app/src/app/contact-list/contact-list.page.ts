import { Component, OnInit } from '@angular/core';
import { ContactService } from '../core/services/contact.service';
import { IonicUtilitiesService } from '../core/services/ionic-utilities.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage implements OnInit {
  contactList = [];
  currentIndexOfPhone = -1;
  currentIndexOfEmail = -1;
  constructor(
    private contactService: ContactService,
    private ionicService: IonicUtilitiesService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.list()
      .subscribe(res => {
        this.contactList = res;
      });
  }

  togglePhoneEmail(type, ind) {
    if (ind === this[type]) {
      this[type] = -1;
    } else {
      this[type] = ind;
    }
  }

  deleteContact(id) {

    this.ionicService.presentAlertConfirm(callback => {
      if (callback) {
        this.contactService.delete(id)
          .subscribe(res => {
            this.ionicService.showToast('Record deleted.!');
            this.loadContacts();
          });
      }
    });
  }

}
