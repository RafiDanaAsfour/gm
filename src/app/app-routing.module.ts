// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { RecipesComponent } from './recipes/recipes.component';
// import { ShoppingList1Component } from './shopping-list1/shopping-list1.component';
// import { ShoppingEdit1Component } from './hopping-edit1/shopping-edit1.component';
// import { RecipeStatComponent } from './recipes/recipe-stat/recipe-stat.component';
// import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
// const appRoutes: Routes = [
// { path: '', redirectTo: '/recipes' ,pathMatch : 'full' },
// { path: 'recipes', component: RecipesComponent , children:[
//   {path: '' ,component:RecipeStatComponent},
//   {path:':id' , component:RecipesDetailsComponent}
// ] },
// { path: 'shopping-list', component: ShoppingList1Component },
// ];
// @NgModule({
//   imports: [RouterModule.forRoot (appRoutes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {
// }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingList1Component } from './shopping-list1/shopping-list1.component';
import { RecipeStatComponent } from './recipes/recipe-stat/recipe-stat.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStatComponent },
      { path: ':id', component: RecipesDetailsComponent },

    ]
  },
  { path: 'shopping-list', component: ShoppingList1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
