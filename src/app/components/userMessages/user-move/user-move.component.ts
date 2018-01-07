import { Component, OnInit } from '@angular/core';
import {MoveMessage} from '../../../modals/MoveMessage/MoveMessage';
import {MessageService} from '../../../services/message.service';
import {TransferService} from '../../../services/transfer.service';

@Component({
  selector: 'app-user-move',
  templateUrl: './user-move.component.html',
  styleUrls: ['./user-move.component.css']
})
export class UserMoveComponent implements OnInit {
  moves: MoveMessage[] = [];
  // maintenance = new MoveMessage();

  constructor(private messageService: MessageService, private transferService: TransferService) { }

  ngOnInit() {
    this.getMoves();
  }

  getMoves(): void {
    this.messageService.getAllMoves()
      .subscribe(moves => this.moves = moves);
  }

  deleteMove(message: MoveMessage): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.moves = this.moves.filter(h => h !== message);
      this.messageService.deleteMove(message).subscribe();
    }
  }

  editMove(message: MoveMessage) {
    this.transferService.setMove(message);
  }
}
