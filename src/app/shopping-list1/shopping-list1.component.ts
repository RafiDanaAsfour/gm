import { Component ,OnInit} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping.service';

@Component({
  selector: 'app-shopping-list1',
  templateUrl: './shopping-list1.component.html',
  styleUrls: ['./shopping-list1.component.css'] // Corrected property name
})
export class ShoppingList1Component implements OnInit {
  ingredients: Ingredient[] = [];


  constructor ( private slService : ShoppingListService){

  }

  ngOnInit(){
    this.ingredients = this.slService.getIngredients();
    this.slService.IngredientsChanged.subscribe(
      (ingredients : Ingredient[])=>{
        this.ingredients=ingredients;
      }
    );
  }
}
