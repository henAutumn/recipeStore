import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@Output() ingredientAdded = new EventEmitter<Ingredient>()


@ViewChild('nameInput',{static:true}) nameInput: ElementRef; 
@ViewChild('amountInput',{static:true}) amountInput: ElementRef;
  constructor() { }

  onAddItems(){
    const newIngredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value)
    this.ingredientAdded.emit(newIngredient)
  }


  ngOnInit() {
  }

}
