import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ContactService } from '../core/services/contact.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.page.html',
  styleUrls: ['./contact-add.page.scss'],
})
export class ContactAddPage implements OnInit {
  addContactForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {
    this.addContactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      surnames: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      phones: this.formBuilder.array([
        this.formBuilder.group({
          phone: new FormControl('', [Validators.required])
        }),
      ]),
      emails: this.formBuilder.array([
        this.formBuilder.group({
          email: new FormControl('', [Validators.required, Validators.email])
        })
      ])
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.addContactForm.valid) {
      this.addContactForm.markAllAsTouched();
      return;
    }
    this.contactService.add(this._v)
    .subscribe(res => {
      window.history.back();
    });
    console.log(this._v);
  }
  get _v() {
    return this.addContactForm.value;
  }
  phonesControls() {
    return (this.addContactForm.get('phones') as FormArray).controls;
  }
  phonesAddRow() {
    const details = this.addContactForm.get('phones') as FormArray;
    details.push(this.phonesCreateItem());
  }

  phonesCreateItem() {
    return this.formBuilder.group({
      phone: new FormControl('', [Validators.required]),
    });
  }

  phonesRemoveItem(index) {
    const details = this.addContactForm.get('phones') as FormArray;
    details.removeAt(index);
  }
  emailsControls() {
    return (this.addContactForm.get('emails') as FormArray).controls;
  }
  emailsAddRow() {
    const details = this.addContactForm.get('emails') as FormArray;
    details.push(this.emailsCreateItem());
  }

  emailsCreateItem() {
    return this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email])
    })

  }

  emailsRemoveItem(index) {
    const details = this.addContactForm.get('emails') as FormArray;
    details.removeAt(index);
  }

}
