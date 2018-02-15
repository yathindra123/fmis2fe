import { Component, OnInit } from '@angular/core';
import {MoveMessage} from '../../../../modals/MoveMessage/MoveMessage';
import {MessageService} from '../../../../services/message.service';
import {TransferService} from '../../../../services/transfer.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-move-editor',
  templateUrl: './move-editor.component.html',
  styleUrls: ['./move-editor.component.css']
})
export class MoveEditorComponent {

  moveMessage= new MoveMessage();
  moves: MoveMessage[];

  constructor(private messageService: MessageService, private tranferService: TransferService) { }

  onSubmit(form: NgForm) {
    this.messageService.updateMoveContent(this.moveMessage)
      .subscribe(hero => {
        this.moves.push(hero);
      });
  }
  update(message): void {
    this.addMove(message);
    this.messageService.updateMoveContent(this.tranferService.getMove())
      .subscribe(() => console.log(this.moveMessage));
  }
  addMove(message) {
    this.tranferService.addMoveContent(message);
  }
}
