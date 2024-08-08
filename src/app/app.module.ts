import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './eserver/server.component';
import { ServersComponent } from './eservers/servers.component';

// new
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';

import { ShoppingList1Component } from './shopping-list1/shopping-list1.component';
import { GameCntrolComponent } from './game-cntrol/game-cntrol.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

import { DropdownDirective } from './shared/dropdown.directiv';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStatComponent } from './recipes/recipe-stat/recipe-stat.component';
import { ShoppingEdit2Component } from './shopping-list1/shopping-edit2/shopping-edit2.component';


//import { ShoppingListService } from './shopping-list1/shopping.service';
// import { RecipeService } from './recipes/recipe.service';
// import { ShoppingListService } './shopping-list1/shopping.service';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipesItemComponent,
    ShoppingList1Component,
    GameCntrolComponent,
    OddComponent,
    EvenComponent,
    DropdownDirective,
    RecipeStatComponent,
    ShoppingEdit2Component


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    // HttpModule
  ],
  providers: [ShoppingList1Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
