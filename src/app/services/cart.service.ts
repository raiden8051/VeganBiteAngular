import { Injectable } from '@angular/core';
import { CartModel } from '../models/CartModel';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartData!: CartModel[];

  constructor() {
    this.cartData = [];
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
  }
  setCartArray(data: any) {
    this.cartData = data;
  }
}
