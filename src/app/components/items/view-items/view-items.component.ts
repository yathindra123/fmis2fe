import { Component, OnInit } from '@angular/core';
import {Item} from '../../../modals/item/Item';
import {ItemService} from '../../../services/item.service';
import {TransferService} from "../../../services/transfer.service";

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService, private tranferService: TransferService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  deleteItem (item: Item): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.items = this.items.filter(h => h !== item);
      this.itemService.deleteItem(item).subscribe();
    }
  }
  editItem(item: Item) {
    this.tranferService.setItem(item);
  }
}
