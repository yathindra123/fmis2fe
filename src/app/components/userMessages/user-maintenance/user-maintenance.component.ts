import { Component, OnInit } from '@angular/core';
import {MaintenanceMessage} from '../../../modals/maintenanceMessage/MaintenanceMessage';
import {MessageService} from '../../../services/message.service';

@Component({
  selector: 'app-user-maintenance',
  templateUrl: './user-maintenance.component.html',
  styleUrls: ['./user-maintenance.component.css']
})
export class UserMaintenanceComponent implements OnInit {
  maintenance: MaintenanceMessage[] = [];
  // maintenance = new MoveMessage();

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.getMoves();
  }

  getMoves(): void {
    this.messageService.getMaintenance()
      .subscribe(maintenance => this.maintenance = maintenance);
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

  deleteMaintenance(message: MaintenanceMessage): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.maintenance = this.maintenance.filter(h => h !== message);
      this.messageService.deleteMaintenance(message).subscribe();
    }
  }
}
