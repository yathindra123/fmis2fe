import { Component, OnInit } from '@angular/core';
import {MoveMessage} from '../../../../modals/MoveMessage/MoveMessage';
import {MessageService} from '../../../../services/message.service';
import {NgForm} from '@angular/forms';
import {TransferService} from '../../../../services/transfer.service';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.css']
})
export class CostComponent {
  moveMessage= new MoveMessage();
  moves: MoveMessage[];

  constructor(private messageService: MessageService, private tranferService: TransferService) { }

  onSubmit(form: NgForm) {
    console.log(form);
    this.messageService.updateMove(this.moveMessage)
      .subscribe(hero => {
        this.moves.push(hero);
      });
  }
  update(cost): void {
    this.addCost(cost);
    this.messageService.updateMove(this.tranferService.getMove())
    .subscribe(() => console.log(this.moveMessage));
  }
  addCost(cost) {
    // this.tranferService.setMove(cost);
    this.tranferService.addCost(cost);
  }

  // updateItem(item): void {
  //   // console.log(room);
  //   this.addChanges(item);
  //   this.itemService.updateItem(this.tranferService.getItem())
  //     .subscribe(() => console.log(this.item));
  // }
}

