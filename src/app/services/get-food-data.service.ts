import { Injectable } from '@angular/core';
import data from '../../assets/swiggyDataSet.json';

@Injectable({
  providedIn: 'root',
})
export class GetFoodDataService {
  foodData;

  constructor() {
    this.foodData = data;
  }
  getFoodData() {
    return this.foodData;
  }

  getFood() {
    return 'hello';
  }
}
