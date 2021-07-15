import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  step = 'step';

  size = 10;
  
  string_var = 'John Doe';
  number_var = 1234;
  boolean_in_online = false;

  // {} = object
  // we can define properties using key and value
  user = {
    name: 'John Does',
    salary: 12345,
    city: 'Xyz'    
  };

  // [] = array
  // array of string
  // array have index. which start from 0
  user_list = ['John', 'Paresh', 'Mike', 'Harry'];


  products = [
    {
      name: 'Laptop',
      images: [
        'https://images-na.ssl-images-amazon.com/images/I/61s7sJEpsVL._SY450_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/81Ne5qKmE8L._SL1500_.jpg'
      ],
      price: 1000,
      colors: ['red', 'black', 'white']
    }, {
      name: 'Camera',
      images: [
        'https://images-na.ssl-images-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg',
        'https://cdn.mos.cms.futurecdn.net/HfpNyWo7Um89DknAYnoRcN.jpg'
      ],
      price: 2999,
      colors: ['black']
    }, {
      name: 'Phone',
      images: [],
      price: 3999,
      colors: ['black']
    }
  ];

  username = '';

  myForm: FormGroup;

  signInForm: FormGroup;

  userRegisterForm: FormGroup;

  constructor(
    private cs: CommonService,
    private formBuilder: FormBuilder
  ) {
    setTimeout(() => {
      this.step = 'step1';
    }, 5000);

    const sum = this.cs.doSum(10, 20);
    

    this.myForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl(''),
      message: new FormControl('')
    });

    this.signInForm = new FormGroup({
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
    });

    this.userRegisterForm = new FormGroup({
      displayName: new FormControl('', [Validators.required]),
          children: this.formBuilder.array([
              this.formBuilder.group({
                  displayName: new FormControl('', []),
                  dob: new FormControl('')
              })
          ])
      });
  }

  onLoginSubmit() {
    if (!this.signInForm.valid) {
      this.signInForm.markAllAsTouched();
      return;
    }
    console.log(this._v)
  }
  // get _v() {
  //   return this.signInForm.value;
  // }
 
  dec() {
    this.size--;
  }
  inc() {
    this.size++;
  }

  getValue() {
    console.log(this.username);
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid);
    console.log(form.value);
  }


  onFormSubmit() {
    if (!this.userRegisterForm.valid) {
        this.userRegisterForm.markAllAsTouched();
        return;
    }
    console.log(this._v)
  }
  get _v() {
      return this.userRegisterForm.value;
  }
  childrenControls() {
      return (this.userRegisterForm.get('children') as FormArray).controls;
  }
  childrenAddRow() {
      const details = this.userRegisterForm.get('children') as FormArray;
  details.push(this.childrenCreateItem());
  }

  childrenCreateItem() {
      return this.formBuilder.group({
          displayName: new FormControl('', []),
          dob: new FormControl('', [Validators.required])
      })

  }

  childrenRemoveItem(index: number) {
    const details = this.userRegisterForm.get('children') as FormArray;
    details.removeAt(index);
  }
  
}
