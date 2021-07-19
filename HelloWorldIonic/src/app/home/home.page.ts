import { Component } from '@angular/core';
var global_num = 12;
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

  num_val = 13;
  static sval = 10; 

  constructor() {
    // var name:string = "John"; 
    // var score1:number = 50;
    // var score2:number = 42.50
    // var sum = score1 + score2 
    // console.log("name"+name) 
    // console.log("first score: "+score1) 
    // console.log("second score: "+score2) 
    // console.log("sum of the scores: "+sum)


    // var num:number = 100;

    // var str = 1
    // console.log(typeof(str))
    // var str2:boolean = <boolean> <any> str   //str is now of type number 
    // console.log(typeof(str2));

    // var num = 2;    // data type inferred as  number 
    // console.log("value of num "+num); 
    // num = "12";
    // console.log(num);


    // let arr = {
    //   name: 'Paresh',
    //   village: 'GUjarat', 
    //   country: 'India'
    // };

    // for (var key in arr) {
    //   console.log(arr[key]);
    // }
  
    
    // let arr = [10, 20, 30, 40];
    // for (var index1 in arr) {
    //   console.log(index1); // prints indexes: 0, 1, 2, 3
    // }
    // console.log(index1); //OK, prints 3 


    // for (let index2 in arr) {
    //   console.log(index2); // prints elements: 0, 1, 2, 3
    // }
    // console.log(index2); //Compiler Error: Cannot find index2

    // console.log(v);
    // var v = 10;

    // let y = 10;
    // console.log(y);

    // const y = {
    //   name: "Paresh"
    // };
    // console.log(y);
    // y.name = "Paresh Gami";
      
    let sum = (x: number, y: number): number => {
      return x + y;
    }

    console.log(sum(10, 20));  
  }

  doLogin1() {

  }

  doLogin2 = () => {

  }

}
