import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {

 public recipes: Recipe[] = [
    new Recipe('Test Receipe', "Ricetta di test", 
    "https://www.alberghiera.it/Img/ricette/942013-1246-cotoletta-pollo-impanata.jpg"),
    new Recipe('Test Receipe 2', "Ricetta di test 2", 
    "https://www.alberghiera.it/Img/ricette/942013-1246-cotoletta-pollo-impanata.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
