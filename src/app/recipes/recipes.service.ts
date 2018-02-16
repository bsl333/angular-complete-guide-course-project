import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../.shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'this is a test',
      'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_1280.jpg',
      [
        new Ingredient('meat', 1),
        new Ingredient('fries', 20)
      ]),
    new Recipe('another test',
    'more testing...',
    'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg',
    [
      new Ingredient('buns', 1),
      new Ingredient('meat', 1)

    ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    // call slice to get a copy of the array, to prevent changing our og recipe list.
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}