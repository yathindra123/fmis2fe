import { Component, OnInit } from '@angular/core';
import {MaintenanceMessage} from '../../../../modals/maintenanceMessage/MaintenanceMessage';
import {MessageService} from '../../../../services/message.service';
import {TransferService} from '../../../../services/transfer.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-maintenance-editor',
  templateUrl: './maintenance-editor.component.html',
  styleUrls: ['./maintenance-editor.component.css']
})
export class MaintenanceEditorComponent {

  maintenanceMessage= new MaintenanceMessage();
  maintenanceMsgs: MaintenanceMessage[];

  constructor(private messageService: MessageService, private tranferService: TransferService) { }

  onSubmit(form: NgForm) {
    console.log(form);
    this.messageService.updateMaintenanceContent(this.maintenanceMessage)
      .subscribe(hero => {
        this.maintenanceMsgs.push(hero);
      });
  }
  update(message): void {
    // console.log(cost);
    this.addMaintenance(message);
    this.messageService.updateMaintenanceContent(this.tranferService.getMaintenance())
      .subscribe(() => console.log(this.maintenanceMessage));
  }
  addMaintenance(message) {
    // this.tranferService.setMove(cost);
    this.tranferService.addMaintenanceContent(message);
  }
}
