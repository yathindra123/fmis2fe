import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {Item} from '../../../modals/item/Item';
import {ItemService} from '../../../services/item.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent {

  item = new Item();
  items: Item[] = [];
  employeeForm: FormGroup;
  constructor(private itemService: ItemService) { }

  addEmployee() {
    // name = name.trim();
    // if (!name) { return; }
    this.itemService.addItem(this.item)
      .subscribe(hero => {
        this.items.push(hero);
      });
  }

  onSubmit(form: NgForm) {
    this.itemService.addItem(this.item)
      .subscribe(hero => {
        this.items.push(hero);
      });
  }

}
