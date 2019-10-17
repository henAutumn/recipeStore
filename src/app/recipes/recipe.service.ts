import {Recipe} from './recipes.model'
import { EventEmitter } from '@angular/core'

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()
 private recipes : Recipe[] = [
    new Recipe('Shakshuka1','Eggs in a spicy tomato sauce1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnqpQPGUyoqUt0airPsKV0bqqn9737BHC9-nfIhNsXifUdvlg7'),
    new Recipe('Shakshuka2','Eggs in a spicy tomato sauce2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnqpQPGUyoqUt0airPsKV0bqqn9737BHC9-nfIhNsXifUdvlg7')

  ]

  getRecipes(){
    return this.recipes.slice()
  }

  
}
