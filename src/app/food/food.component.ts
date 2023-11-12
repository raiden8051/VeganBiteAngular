import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetFoodDataService } from '../services/get-food-data.service';
import { CartService } from '../services/cart.service';
import { RestaurantDetailsComponent } from '../restaurant-details/restaurant-details.component';
import { Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [CommonModule, RestaurantDetailsComponent],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css',
})
export class FoodComponent {
  food;
  constructor(private foodData: GetFoodDataService, private router: Router) {
    this.food = this.foodData.getFoodData();
  }
  onClick(clickData: any) {
    console.log(clickData.name);

    this.router.navigate(['/restaurant-details'], {
      queryParams: { clickData },
    });
  }
}
