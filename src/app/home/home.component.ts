import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodComponent } from '../food/food.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FoodComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title="Hello"
  constructor() { }
  onClick(){
  }
}
