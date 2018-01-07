import { Component, OnInit } from '@angular/core';
import {Room} from '../../../modals/room/room';
import {RoomService} from '../../../services/room.service';
import {TransferService} from "../../../services/transfer.service";

@Component({
  selector: 'app-view-rooms',
  templateUrl: './view-rooms.component.html',
  styleUrls: ['./view-rooms.component.css']
})
export class ViewRoomsComponent implements OnInit {

  rooms: Room[] = [];

  ngOnInit() {
    this.getRooms();
  }

  constructor(private roomService: RoomService, private tranferService: TransferService) { }

  getRooms(): void {
    this.roomService.getRooms()
      .subscribe(rooms => this.rooms = rooms);
  }

  deleteRoom (room: Room): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.rooms = this.rooms.filter(h => h !== room);
      this.roomService.deleteRoom(room).subscribe();
    }
  }
  editRoom(room: Room) {
    this.tranferService.setRoom(room);
  }
}

