import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  productList = [
    {name: 'Mobile', price: 10000,content:'Android Mobile with 12gb RAM',src:'mobiles'},
    {name: 'Watch', price: 999,content:'Android Smart Watch',src:'watch'},
    {name: 'Laptop', price: 99000,content:'Dell Laptop With 12gb Ram & 500 Gb SSD',src:'laptop'},    
    {name: 'Camera', price: 12000,content:'12 Mega Pixel Camera',src:'camera'}
   ];
  
  constructor() { }

  ngOnInit() {
  }

  // addProductToCart(product) {
  //   const productExistInCart = this.cartProductList.find(({name}) => name === product.name); // find product by name
  //   if (!productExistInCart) {
  //     this.cartProductList.push({...product, num:1}); // enhance "porduct" opject with "num" property
  //     return;
  //   }
  //   productExistInCart.num += 1;
  // }
  //  removeProduct(product) {
  //   this.cartProductList = this.cartProductList.filter(({name}) => name !== product.name)
  //  }

}


