import { Component, OnInit } from '@angular/core';
import {MoveMessage} from '../../../../modals/MoveMessage/MoveMessage';
import {MessageService} from '../../../../services/message.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.css']
})
export class CostComponent {
  moveMessage= new MoveMessage();
  moves: MoveMessage[];

  constructor(private messageService: MessageService) { }

  onSubmit(form: NgForm) {
    console.log(form);
    this.messageService.updateMove(this.moveMessage)
      .subscribe(hero => {
        this.moves.push(hero);
      });
  }
  update(): void {
    this.messageService.updateMove(this.moveMessage)
    .subscribe(() => console.log(this.moveMessage));
  }
}
