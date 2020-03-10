import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[] = [
  new Recipe('my first recipe', 'my first description', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'),
  new Recipe('my 2nd recipe', 'my first description', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'),
  new Recipe('my 3rd recipe', 'my first description', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
