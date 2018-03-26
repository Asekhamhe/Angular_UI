import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

  products = [
    {'title': 'USB Car Charger',
      'description': 'My description here'
  }
  ];

  title = '';
  description = '';

  addProduct(value: any) {
    this.products.push({
      'title': value.title,
      'description': value.description
    });
    this.title = '';
    this.description = '';
  }

  removeProduct(product) {
    this.products.splice(product, 1);
  }

}
