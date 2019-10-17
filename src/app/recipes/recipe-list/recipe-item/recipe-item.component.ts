import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe;
  // @Output() recipeDetails = new EventEmitter<void>(); // creates the event 
  constructor(private recipeService: RecipeService) { }

  sendRecipesDetail(r, e){
    // this.recipeDetails.emit()// emits the event out 
    this.recipeService.recipeSelected.emit(this.recipe)
  }

  ngOnInit() {
  }

}
