// import { Component ,Input,Output,EventEmitter } from '@angular/core';
// import { Recipe } from '../../resipes.module';


// @Component({
//   selector: 'app-recipes-item',
//   templateUrl: './recipes-item.component.html',
//   styleUrl: './recipes-item.component.css'
// })

// export class RecipesItemComponent {
//   @Input() recipe: Recipe;
//   @Output() recipeSelected = new EventEmitter<void>();


//   onSelected() {
//     this.recipeSelected.emit();

//   }
// }

import { Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../../resipes.module';// Adjust the path as needed

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index:number;

  ngOnInit() {

  }
}
