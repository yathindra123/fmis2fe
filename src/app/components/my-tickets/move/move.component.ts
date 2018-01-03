import { Component, OnInit } from '@angular/core';
import {MoveMessage} from '../../../modals/MoveMessage/MoveMessage';
import {MessageService} from '../../../services/message.service';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.css']
})
export class MoveComponent implements OnInit {
  status: string;
  moves: MoveMessage[] = [];
  // maintenance = new MoveMessage();

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.getMoves();
  }

  getStatus(status: number) {
    if (status === 0) {
      return 'Pending';
    }else {
      return 'Success';
    }
  }
  getStatusClass(status: number) {
    if (status === 0) {
      return 'label label-warning';
    }else {
      return 'label label-success';
    }
  }

  getMoves(): void {
    this.messageService.getMoves()
      .subscribe(moves => this.moves = moves);
  }

}
