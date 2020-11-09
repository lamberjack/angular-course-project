import { Component, OnInit } from '@angular/core';
import  { Ingredient } from '../../shared/ingredient.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public ingredients: Ingredient[] = [
    new Ingredient("Tomatoes", 20),
    new Ingredient("Chickens", 2)
  ]; 
  constructor() { }

  ngOnInit(): void {
  }

}
