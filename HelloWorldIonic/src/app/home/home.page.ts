import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
  constructor() {}

}
