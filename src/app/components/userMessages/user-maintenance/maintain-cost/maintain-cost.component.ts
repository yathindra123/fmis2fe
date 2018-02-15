import { Component, OnInit } from '@angular/core';
import {MaintenanceMessage} from '../../../../modals/maintenanceMessage/MaintenanceMessage';
import {NgForm} from '@angular/forms';
import {MessageService} from '../../../../services/message.service';
import {TransferService} from '../../../../services/transfer.service';

@Component({
  selector: 'app-maintain-cost',
  templateUrl: './maintain-cost.component.html',
  styleUrls: ['./maintain-cost.component.css']
})
export class MaintainCostComponent {
  maintenanceMessage= new MaintenanceMessage();
  maintenanceMessages: MaintenanceMessage[];

  constructor(private messageService: MessageService, private tranferService: TransferService) { }

  onSubmit(form: NgForm) {
    console.log(form);
    this.messageService.updateMaintenance(this.maintenanceMessage)
      .subscribe(hero => {
        this.maintenanceMessages.push(hero);
      });
  }
  update(cost): void {
    // console.log(cost);
    this.addCost(cost);
    this.messageService.updateMaintenance(this.tranferService.getMaintenance())
      .subscribe(() => console.log(this.maintenanceMessage));
  }
  addCost(cost) {
    this.tranferService.addMaintainCost(cost);
  }
}
