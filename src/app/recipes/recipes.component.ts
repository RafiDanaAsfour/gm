// import { Component } from '@angular/core';
// import { Recipe } from './resipes.module';
// @Component({
//   selector: 'app-recipes',
//   templateUrl: './recipes.component.html',
//   styleUrl: './recipes.component.css'
// })
// export class RecipesComponent {
//    selectedRecipe  : Recipe ;

// }

import { Component ,OnInit } from '@angular/core';
import { Recipe } from './resipes.module'; // Adjust the path as needed
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'], // Corrected property name
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit{
  selectedRecipe: Recipe;

  constructor (private recpiceService : RecipeService){}

  ngOnInit (){
    this.recpiceService.recipeSelected.subscribe(
      (recpie:Recipe) => {
        this.selectedRecipe = recpie;
      }
    );
  }

}
