import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() recipeClicked = new EventEmitter<{isRecipe: boolean, isShoppingList: boolean}>();
  @Output() shoppingListClicked = new EventEmitter<{isRecipe: boolean, isShoppingList: boolean}>()
  constructor() { }

  ngOnInit() {
  }

  onRecipeShow() {
    let recipeObj: {isRecipe: boolean, isShoppingList: boolean} = {
      isRecipe: true, 
      isShoppingList: false
    };
    this.recipeClicked.emit(recipeObj);
  }

  onShoppingListShow() {
    let recipeObj: {isRecipe: boolean, isShoppingList: boolean} = {
      isRecipe: false, 
      isShoppingList: true
    };
    this.shoppingListClicked.emit(recipeObj);
  }

}
