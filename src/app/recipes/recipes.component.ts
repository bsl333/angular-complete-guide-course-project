import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  styleUrls: ['./recipes.component.css'],
  templateUrl: './recipes.component.html',
  providers: [RecipesService]
})

export class RecipesComponent implements OnInit{
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );
  }
}