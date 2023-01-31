import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  products:Array<Product> = [];
  type1:String="full";
  ngOnInit(): void {
    for(let i=0;i<100;i++){
      this.products[i]=new Product("producto "+i,i*2000);
    }
  }

}
