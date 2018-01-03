import { Component} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {Room} from '../../../modals/room/room';
import {RoomService} from '../../../services/room.service';

@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.css']
})
export class AddRoomsComponent {

  room = new Room();
  rooms: Room[] = [];
  constructor(private roomService: RoomService) { }

  onSubmit(form: NgForm) {
    this.roomService.addRoom(this.room)
      .subscribe(hero => {
        this.rooms.push(hero);
        if (hero != null) {
          alert('Room details added sucessfully!');
        } else {
          alert('Some error has occured!');
        }
      });
  }
}
