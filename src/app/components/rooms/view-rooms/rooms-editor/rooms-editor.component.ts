import { Component, OnInit } from '@angular/core';
import {TransferService} from '../../../../services/transfer.service';
import {RoomService} from '../../../../services/room.service';
import {Room} from '../../../../modals/room/room';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-rooms-editor',
  templateUrl: './rooms-editor.component.html',
  styleUrls: ['./rooms-editor.component.css']
})
export class RoomsEditorComponent {

  room= new Room();
  rooms: Room[];

  constructor(private roomService: RoomService, private tranferService: TransferService) { }

  onSubmit(form: NgForm) {
    console.log(form);
    this.roomService.updateRoom(this.room)
      .subscribe(hero => {
        this.rooms.push(hero);
      });
  }
  update(room): void {
    // console.log(room);
    this.addChanges(room);
    this.roomService.updateRoom(this.tranferService.getRoom())
      .subscribe(() => console.log(this.room));
  }
  addChanges(room) {
    // this.tranferService.setMove(cost);
    this.tranferService.editRoom(room);
  }

}
