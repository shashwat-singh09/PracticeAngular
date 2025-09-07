import { Component } from '@angular/core';
import { Products } from './module/product.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practiceAngular';
  product:any=[
    {
      id: 1,
      name: "Television",
      price: 400000,
      total: 0,
      selectedQuantity: 0,
    },
    {
      id: 2,
      name: "Washing machine",
      price: 35000,
      total: 0,
      selectedQuantity: 0,
    },
  ];

  increaseQuantity(i:number){
    this.product[i].selectedQuantity+=1
    let ans=this.product[i].selectedQuantity;
    this.product[i].total=this.product[i].price * ans;


  }

  decreaseQuantity(i:number){
    this.product[i].selectedQuantity-=1
    let ans=this.product[i].selectedQuantity;
    this.product[i].total=this.product[i].price * ans;
  }


  
}
