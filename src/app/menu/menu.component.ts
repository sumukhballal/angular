import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service'; 
import { DISHES } from '../shared/dishes';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
  //providers:[DishService]
})
export class MenuComponent implements OnInit {

  //static selectedDish: any;
  dishes: Dish[];
  selectedDish:Dish;

  constructor(private dishService: DishService) {
     
   }

  ngOnInit() {
  this.dishes=this.dishService.getDishes();
}  

  onSelect(dish:Dish) {

    this.selectedDish = dish;

  }

}
