import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-maintenance',
  templateUrl: './user-maintenance.component.html',
  styleUrls: ['./user-maintenance.component.css']
})
export class UserMaintenanceComponent implements OnInit {


  // maintenanceCount: number;
  messages = [
    {sender: 'Yathindra', Date: '20/12/2017', message: 'This is a new message and sent for testing purpose', deleted: false},
    {sender: 'Rawya', Date: '21/12/2017', message: 'New Message 02', deleted: false},
    {sender: 'Kodithuwakku', Date: '22/12/2017', message: 'New Message 03', deleted: false}
  ];

  ngOnInit() {
  }

  deleteTodo(index: number) {
    this.messages.splice(index, 1);
  }


}
