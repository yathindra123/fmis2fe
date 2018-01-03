import { Component, OnInit } from '@angular/core';
import {MoveMessage} from '../../../modals/MoveMessage/MoveMessage';
import {MessageService} from '../../../services/message.service';

@Component({
  selector: 'app-user-move',
  templateUrl: './user-move.component.html',
  styleUrls: ['./user-move.component.css']
})
export class UserMoveComponent implements OnInit {
  moves: MoveMessage[] = [];
  // maintenance = new MoveMessage();

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.getMoves();
  }

  getMoves(): void {
    this.messageService.getMoves()
      .subscribe(moves => this.moves = moves);
  }
  // // add(name: string): void {
  // //   name = name.trim();
  // //   if (!name) { return; }
  // //   this.messageService.addMove({ name } as MoveMessage)
  // //     .subscribe(move => {
  // //       this.maintenance.push(move);
  // //     });
  // // }
  //
  // delete(move: MoveMessage): void {
  //   this.maintenance = this.maintenance.filter(h => h !== move);
  //   this.messageService.deleteMove(move).subscribe();
  // }


  deleteMove(message: MoveMessage): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.moves = this.moves.filter(h => h !== message);
      this.messageService.deleteMove(message).subscribe();
    }
  }
}
