import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes : Recipe[] = [
    new Recipe('Shakshuka1','Eggs in a spicy tomato sauce1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnqpQPGUyoqUt0airPsKV0bqqn9737BHC9-nfIhNsXifUdvlg7'),
    new Recipe('Shakshuka2','Eggs in a spicy tomato sauce2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnqpQPGUyoqUt0airPsKV0bqqn9737BHC9-nfIhNsXifUdvlg7')

  ]
  constructor() { }

  shippingDetails(recipe:Recipe){
    this.recipeWasSelected.emit(recipe)
  }

  ngOnInit() {
  }

}
