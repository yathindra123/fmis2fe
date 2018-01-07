import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../../services/message.service';
import {MaintenanceMessage} from '../../../modals/maintenanceMessage/MaintenanceMessage';
import {TransferService} from '../../../services/transfer.service';
@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {
  status: string;
  maintenance: MaintenanceMessage[] = [];

  constructor(private messageService: MessageService , private transferService: TransferService) {
  }

  ngOnInit() {
    this.getMaintenance();
  }

  getStatus(status: boolean) {
    if (status === false) {
      return 'Pending';
    } else {
      return 'Approved';
    }
  }

  getStatusClass(status: boolean) {
    if (status === false) {
      return 'label label-warning';
    } else {
      return 'label label-success';
    }
  }

  getMaintenance(): void {
    this.messageService.getMaintenance(this.transferService.getEmployeeName())
      .subscribe(maintenance => this.maintenance = maintenance);
  }

  deleteMaintenance(message: MaintenanceMessage): void {
    const difference: any = new Date(message.createdAt).valueOf() - new Date().valueOf();
    console.log(difference);
    const diffInHours: any = Math.abs(difference / ( 1000 * 3600 ));
    if (diffInHours <= 24) {
      console.log('Can delete');
      console.log(diffInHours);
      if (window.confirm('Are you sure you want to delete?')) {
        this.maintenance = this.maintenance.filter(h => h !== message);
        this.messageService.deleteMaintenance(message).subscribe();
      }
    } else {
      window.alert('Sorry. You can\'t delete');
    }
  }
  editMaintenance(message: MaintenanceMessage) {
    const difference: any = new Date(message.createdAt).valueOf() - new Date().valueOf();
    console.log(difference);
    const diffInHours: any = Math.abs(difference / ( 1000 * 3600 ));
    if (diffInHours <= 24) {
      if (window.confirm('Are you sure you want to delete?')) {
        this.transferService.setMove(message);
      }
    } else {
      window.alert('Sorry. You can\'t edit');
    }
  }
}

