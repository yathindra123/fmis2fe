import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {TransferService} from '../../../../services/transfer.service';
import {ItemService} from '../../../../services/item.service';
import {Item} from '../../../../modals/item/Item';

@Component({
  selector: 'app-items-editor',
  templateUrl: './items-editor.component.html',
  styleUrls: ['./items-editor.component.css']
})
export class ItemsEditorComponent {

  item= new Item();
  items: Item[];

  constructor(private itemService: ItemService, private tranferService: TransferService) { }

  onSubmit(form: NgForm) {
    console.log(form);
    this.itemService.updateItem(this.item)
      .subscribe(hero => {
        this.items.push(hero);
      });
  }
  update(item): void {
    // console.log(room);
    this.addChanges(item);
    this.itemService.updateItem(this.tranferService.getItem())
      .subscribe(() => console.log(this.item));
  }
  addChanges(item) {
    // this.tranferService.setMove(cost);
    this.tranferService.addNewItem(item);
  }

}
