import { Component, OnInit } from '@angular/core';
import {MaintenanceMessage} from '../../../modals/maintenanceMessage/MaintenanceMessage';
import {MessageService} from '../../../services/message.service';
import {TransferService} from '../../../services/transfer.service';

@Component({
  selector: 'app-user-maintenance',
  templateUrl: './user-maintenance.component.html',
  styleUrls: ['./user-maintenance.component.css']
})
export class UserMaintenanceComponent implements OnInit {
  maintenance: MaintenanceMessage[] = [];

  constructor(private messageService: MessageService, private transferService: TransferService) { }

  ngOnInit() {
    this.getMaintenance();
  }

  getMaintenance(): void {
    this.messageService.getAllMaintenance()
      .subscribe(maintenance => this.maintenance = maintenance);
  }

  deleteMaintenance(message: MaintenanceMessage): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.maintenance = this.maintenance.filter(h => h !== message);
      this.messageService.deleteMaintenance(message).subscribe();
    }
  }
  editMaintenance(message: MaintenanceMessage) {
    this.transferService.setMaintenance(message);
  }
}
