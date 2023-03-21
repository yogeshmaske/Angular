import { Component, OnInit } from '@angular/core';
import { AddtocartService } from 'src/app/service/addtocart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  item = 0;
  numberOfItemInCart = 0;
  
  productList = [
    {productId:101,name: 'Mobile', price: 10000,content:'Android Mobile with 12gb RAM',src:'mobiles',cartItem:0},
    {productId:102,name: 'Watch', price: 999,content:'Android Smart Watch, Waterprooof',src:'watch',cartItem:0},
    {productId:103,name: 'Laptop', price: 99000,content:'Dell Laptop With 12gb Ram & 500 Gb SSD',src:'laptop',cartItem:0},    
    {productId:104,name: 'Camera', price: 12000,content:'12 Mega Pixel Camera , Waterprooof  ',src:'camera',cartItem:0}
   ];
   
  cartProductList = [];
  constructor(private addToCartService:AddtocartService) { }

  ngOnInit() {
    this.addToCartService.getProducts().subscribe(res=>{
      console.log('Cart Data from local server',res);
      this.cartProductList = res;
      
    },(err=>{console.log(err);
    }))
  }

  addToCart(id){
    this.item +=1;
   
    // this.productList.map(ele=>{
    //    if(ele.productId ==id){ 
    //     this.numberOfItemInCart +=1;
    //    }
    // })
    for (let object of this.productList) {
      if (object.productId === id) {
          object.cartItem +=1;
          console.log(object);
          this.numberOfItemInCart +=1;
          // localStorage.setItem('items','')

      }
     }
  }

  removeFromToCart(id){
    this.item -=1;
    
    for (let object of this.productList) {
      if (object.productId === id) {
          object.cartItem -=1;
          console.log(object);
          this.numberOfItemInCart -=1;
          
      }
     }
  }
}
