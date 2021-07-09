import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
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
 
  
  // {} = object
}
