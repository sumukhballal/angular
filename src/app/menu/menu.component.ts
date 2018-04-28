import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
//import '../dishdetail'; 

import { DISHES } from '../shared/dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //static selectedDish: any;
  dishes = DISHES;
  selectedDish:Dish;

  constructor() { }

  ngOnInit() {
  }

  onSelect(dish:Dish) {

    this.selectedDish = dish;

  }

}
