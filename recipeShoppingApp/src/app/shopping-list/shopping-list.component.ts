import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediand.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
ingrediants: Ingrediant[] = [
  new Ingrediant('qwdqdwqd', 84884),
  new Ingrediant('sdf', 232),
  new Ingrediant('rtc', 65)
]
  constructor() { }

  ngOnInit() {
  }

}
