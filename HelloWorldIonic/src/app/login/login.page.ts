import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { IonicUtilitiesService } from '../services/ionic-utilities.service';
import { ILogin } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private ionicService: IonicUtilitiesService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', []),
      password: new FormControl('', [])
    });
  }

  loadUser() {
    this.ionicService.showLoader()
    .then((_) => {
      this.authService.getUserList()
      .subscribe(result => {
        console.log(result);
        this.ionicService.hideLoader()
        .then((_) => {
          console.log('hidden');
        })
      })
    });
  }

  async loadUserNew() {
    await this.ionicService.showLoader();
    const user = await this.authService.getUserList()

    user.subscribe(result => {
      console.log(result);
    });

    await this.ionicService.hideLoader();
  }

  ngOnInit() {
    this.loadUserNew();
    let myObj = { size: 10, label: "Size 10 Object" };
    this.printLabel(myObj);
  }

  printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
  }

  onFormSubmit() {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const userObj: ILogin = this._v;
  }

  get _v() {
    return this.loginForm.value;
  }

}
