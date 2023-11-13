import { Injectable } from '@angular/core';
import { CartModel } from '../models/CartModel';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartData!: CartModel[];

  constructor() {
    this.cartData = [];
    if (localStorage.getItem('cartData')) {
      this.cartData = JSON.parse(localStorage.getItem('cartData') || '[]');
    }
  }

  getCartData() {
    return this.cartData;
  }
  setCartData(data: CartModel) {
    this.cartData.push({
      id: data.id,
      restId: data.restId,
      price: data.price,
      quantity: data.quantity,
    });
    localStorage.setItem('cartData', JSON.stringify(this.cartData));
  }
  setCartArray(data: any) {
    this.cartData = data;
    localStorage.setItem('cartData', JSON.stringify(this.cartData));
  }
}
