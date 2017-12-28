import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-move',
  templateUrl: './user-move.component.html',
  styleUrls: ['./user-move.component.css']
})
export class UserMoveComponent implements OnInit {

  // maintenanceCount: number;
  todos: any[] = [];
  messages = [
    {sender: 'Yathindra', Date: '20/12/2017', message: 'This is a new message and sent for testing purpose', deleted: false},
    {sender: 'Rawya', Date: '21/12/2017', message: 'New Message 02', deleted: false},
    {sender: 'Kodithuwakku', Date: '22/12/2017', message: 'New Message 03', deleted: false}
  ];
  // showStyle: false;
  ngOnInit() {
    // for (let i = 0; i < 6; i++) {
    //   this.todos[i] = { text: `text - ${i + 1}`, deleted: false };
    // }

    // for (let i = 0; i < 2; i++) {
    //   this.todos[i] = { text: `text - ${i + 1}`, deleted: false };
    // }
  }

  deleteTodo(index: number) {
    this.messages.splice(index, 1);
  }

}
