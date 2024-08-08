// import { Component,Input } from '@angular/core';
// import { Recipe } from '../resipes.module'; // Adjust the path as needed
// @Component({
//   selector: 'app-recipes-details',
//   templateUrl: './recipes-details.component.html',
//   styleUrl: './recipes-details.component.css'
// })
// export class RecipesDetailsComponent {
//   @Input() recipe : Recipe;
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
// }


import { Component,OnInit } from '@angular/core';
import { Recipe } from '../resipes.module'; // Adjust the path as needed
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css'] // Corrected property name
})
export class RecipesDetailsComponent implements OnInit
{
   recipe: Recipe;
   id:number;
  constructor(private recipeService: RecipeService,
              private route:ActivatedRoute){}

  ngOnInit(){
    this.route.params
    .subscribe(
      (params :Params)=>{
        this.id=+params['id'];
        this.recipe=this.recipeService.getRecipe(this.id);
      }
    );
  }
  onAddShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}

