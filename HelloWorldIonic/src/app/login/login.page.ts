import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ILogin } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authService: AuthService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', []),
      password: new FormControl('', [])
    });
  }

  ngOnInit() {
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
    this.authService.login(userObj);
  }

  get _v() {
    return this.loginForm.value;
  }

}
