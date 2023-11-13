import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { CartModel } from '../models/CartModel';
import { GetFoodDataService } from '../services/get-food-data.service';

@Component({
  selector: 'app-restaurant-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-details.component.html',
  styleUrl: './restaurant-details.component.css',
})
export class RestaurantDetailsComponent {
  restaurantDetails: any;
  menu: any;
  accordianKey: any;
  cart;
  alreadyInCart;

  constructor(
    private router: Router,
    private cartData: CartService,
    private foodData: GetFoodDataService
  ) {
    let id;
    if (this.router.getCurrentNavigation()?.extras?.queryParams) {
      id =
        this.router.getCurrentNavigation()?.extras?.queryParams?.[
          'curr_rest_id'
        ];
    } else {
      id = JSON.parse(localStorage.getItem('curr_rest_id') || '{}');
    }
    this.getRestaurantDataById(id);
    this.alreadyInCart = this.cartData.getCartData();
    this.cart = this.cartData;
  }

  getRestaurantDataById(id: any) {
    let rest = this.foodData.getFoodData();
    rest = rest.filter((item) => item._id['$oid'] === id);
    this.restaurantDetails = rest[0];
    this.menu = rest[0]?.menu;
  }

  accordianClick(key: any) {
    console.log(key);
    if (this.accordianKey == key) this.accordianKey = null;
    else this.accordianKey = key;
  }
  handleAddToCart(obj: any) {
    let d = new CartModel();
    d.id = obj.key;
    d.price = parseInt(obj.value.price);
    d.restId = this.restaurantDetails._id['$oid'];
    d.quantity = 1;
    this.cart.setCartData(d);
    // console.log(this.cart.getCartData());
    // console.log(obj);
    this.alreadyInCart = this.cartData.getCartData();
  }
  alreadyInCartCheck(id: any) {
    // console.log(id);
    return this.alreadyInCart.filter((item) => item.id === id).length > 0;
  }
  handleDeleteFromCart(obj: any) {
    // console.log(id);
    let d = this.cartData.getCartData();
    let dd = d.filter((item) => item.id !== obj.key);
    this.cartData.setCartArray(dd);
    this.alreadyInCart = this.cartData.getCartData();

    console.log(dd);
  }
}
