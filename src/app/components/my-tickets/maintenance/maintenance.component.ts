import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../../services/message.service';
import {MaintenanceMessage} from '../../../modals/maintenanceMessage/MaintenanceMessage';
@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {
  status: string;
  maintenance: MaintenanceMessage[] = [];

  // maintenance = new MoveMessage();

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.getMaintenance();
  }

  getStatus(status: number) {
    if (status === 0) {
      return 'Pending';
    } else {
      return 'Success';
    }
  }

  getStatusClass(status: number) {
    if (status === 0) {
      return 'label label-warning';
    } else {
      return 'label label-success';
    }
  }

  getMaintenance(): void {
    this.messageService.getMaintenance()
      .subscribe(maintenance => this.maintenance = maintenance);
  }

  deleteMaintenance(message: MaintenanceMessage): void {
    const differece: any = new Date(message.createdAt).valueOf() - new Date().valueOf();
    console.log(differece);
    const diffInHours: any = (differece / ( 1000 * 3600 ));
    if (diffInHours <= 24) {
      console.log('Can delete');
      console.log(diffInHours);
    }

    if (window.confirm('Are you sure you want to delete?')) {
      this.maintenance = this.maintenance.filter(h => h !== message);
      this.messageService.deleteMaintenance(message).subscribe();
    }
  }
}
