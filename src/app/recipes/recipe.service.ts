import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list1/shopping.service";
import { Recipe } from "./resipes.module";
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a sample test recipe.',
      'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/k%2Farchive%2Fb24fb5ba50e1c08c306afdb2ff49b1ac8a1ecd03',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'Another Test Recipe',
      'This is another sample test recipe.',
      'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/k%2Farchive%2Fb24fb5ba50e1c08c306afdb2ff49b1ac8a1ecd03',
      [
        new Ingredient('Buns', 1),
        new Ingredient('Meat', 20)
      ]
    )
  ];
  constructor(private slService : ShoppingListService){}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index:number){
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients:Ingredient[]){
      this.slService.addIngredients(ingredients);
  }
}
