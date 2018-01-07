import { Component, OnInit } from '@angular/core';
import {MoveMessage} from '../../../modals/MoveMessage/MoveMessage';
import {MessageService} from '../../../services/message.service';
import {TransferService} from '../../../services/transfer.service';
// import {TransferService} from "../../../services/transfer.service";

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.css']
})
export class MoveComponent implements OnInit {
  status: string;
  moves: MoveMessage[] = [];

  constructor(private messageService: MessageService, private transferService: TransferService) { }

  ngOnInit() {
    this.getMoves();
  }

  getStatus(status: boolean) {
    if (status === false) {
      return 'Pending';
    }else {
      return 'Approved';
    }
  }
  getStatusClass(status: boolean) {
    if (status === false) {
      return 'label label-warning';
    }else {
      return 'label label-success';
    }
  }

  // getMaintenance(): void {
  //   this.messageService.getMaintenance()
  //     .subscribe(maintenanceMsgs => this.maintenanceMsgs = maintenanceMsgs);
  // }

  getMoves(): void {
    this.messageService.getMoves(this.transferService.getEmployeeName())
      .subscribe(moves => this.moves = moves);
  }

  editMove(message: MoveMessage) {
    this.transferService.setMove(message);
  }

}
