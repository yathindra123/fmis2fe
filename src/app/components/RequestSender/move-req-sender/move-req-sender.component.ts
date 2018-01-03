import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {NgForm} from '@angular/forms';
import {MoveMessage} from '../../../modals/MoveMessage/MoveMessage';
import {MessageService} from '../../../services/message.service';
@Component({
  selector: 'app-move-req-sender',
  templateUrl: './move-req-sender.component.html',
  styleUrls: ['./move-req-sender.component.css']
})
export class MoveReqSenderComponent implements OnInit {

  // room: Employee;
  moveMessage = new MoveMessage();
  moves: MoveMessage[] = [];
  moveForm: FormGroup;
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
  addMove() {
    // name = name.trim();
    // if (!name) { return; }
    this.messageService.addMove(this.moveMessage)
      .subscribe(move => {
        this.moves.push(move);
      });
  }

  onSubmit(form: NgForm) {
    this.messageService.addMove(this.moveMessage)
      .subscribe(move => {
        this.moves.push(move);
      });
    console.log(form.value);
  }

}
