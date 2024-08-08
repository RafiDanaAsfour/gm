import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit2',
  templateUrl: './shopping-edit2.component.html',
  styleUrl: './shopping-edit2.component.css'
})
export class ShoppingEdit2Component implements OnInit {

  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;
  constructor(private slService : ShoppingListService){}

  onAdd() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }


  ngOnInit(){

  }
}
