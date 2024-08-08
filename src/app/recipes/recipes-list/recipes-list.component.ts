// import { Component, EventEmitter ,Output} from '@angular/core';
// import { Recipe } from '../resipes.module'; // Adjust the path as needed

// @Component({
//   selector: 'app-recipes-list',
//   templateUrl: './recipes-list.component.html',
//   styleUrls: ['./recipes-list.component.css'] // Corrected property name
// })
// export class RecipesListComponent {
// @Output() recipeWasSelected = new EventEmitter<Recipe>();

//   recipes: Recipe[] = [
//     new Recipe(
//       'A Test Recipe',
//       'This is a sample test recipe.',
//       'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/k%2Farchive%2Fb24fb5ba50e1c08c306afdb2ff49b1ac8a1ecd03'
//     ),
//     new Recipe(
//       'A Test Recipe',
//       'This is a sample test recipe.',
//       'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/k%2Farchive%2Fb24fb5ba50e1c08c306afdb2ff49b1ac8a1ecd03'
//     )
//   ];


//   onResipeSelected(recipe:Recipe){
//     this.recipeWasSelected.emit(recipe);
//   }
// }
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { Recipe } from '../resipes.module'; // Adjust the path as needed
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'] // Corrected property name
})
export class RecipesListComponent implements OnInit {
  recpies:Recipe[];

  constructor (private recipeService:RecipeService){}

  ngOnInit() {
    this.recpies = this.recipeService.getRecipes();
  }


}
