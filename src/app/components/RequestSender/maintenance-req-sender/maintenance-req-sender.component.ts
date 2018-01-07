import { Component, OnInit } from '@angular/core';
import {MaintenanceMessage} from '../../../modals/maintenanceMessage/MaintenanceMessage';
import {MessageService} from '../../../services/message.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-maintenance-req-sender',
  templateUrl: './maintenance-req-sender.component.html',
  styleUrls: ['./maintenance-req-sender.component.css']
})
export class MaintenanceReqSenderComponent implements OnInit {

  maintenanceMessage = new MaintenanceMessage();
  maintenanceMsgs: MaintenanceMessage[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    //   this.employeeForm = new FormGroup({
    //     name: new FormControl('', {
    //       validators: Validators.required,
    //       updateOn: 'change'
    //     }),
    //     password: new FormControl('', {
    //       validators: Validators.required,
    //       updateOn: 'change'
    //     }),
    //     email: new FormControl('', {
    //       validators: Validators.required,
    //       updateOn: 'change'
    //     }),
    //     empType: new FormControl('', {
    //       validators: Validators.required,
    //       updateOn: 'change'
    //     })
    //   });
  }
  addMaintenance() {
    // name = name.trim();
    // if (!name) { return; }
    this.messageService.addMaintenance(this.maintenanceMessage)
      .subscribe(move => {
        this.maintenanceMsgs.push(move);
      });
  }

  onSubmit(form: NgForm) {
    this.messageService.addMaintenance(this.maintenanceMessage)
      .subscribe(move => {
        this.maintenanceMsgs.push(move);
      });
    console.log(form.value);
  }


}
