import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {Room} from '../modals/room/room';

// Http Options
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RoomService {

  rooms: string[] = [];

  // URL to connect
  private roomsUrl = 'http://localhost:8080/buildings';  // URL to web api

  // Create constructor
  constructor( private http: HttpClient ) { }

  // Get all rooms
  getRooms (): Observable<Room[]> {
    return this.http.get<Room[]>(this.roomsUrl)
      .pipe(
        tap(rooms => this.log(`fetched rooms`)),
        catchError(this.handleError('getRooms', []))
      );
  }

  // Add a room
  addRoom (room: Room): Observable<Room> {
    return this.http.post<Room>(this.roomsUrl, room, httpOptions).pipe(
      tap((room2: Room) => this.log(`added room w/ id=${room2.roomId}`)),
      catchError(this.handleError<Room>('addRoom'))
    );
  }

  // Delete a room
  deleteRoom (room: Room | number): Observable<Room> {
    const roomId = typeof room === 'number' ? room : room.roomId;
    const url = `${this.roomsUrl}/${roomId}`;

    return this.http.delete<Room>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted room roomId=${roomId}`)),
      catchError(this.handleError<Room>('deleteRoom'))
    );
  }

  // Update room details
  updateRoom (room: Room): Observable<Room> {
    const roomId = typeof room === 'number' ? room : room.roomId;
    console.log(room);
    const url = `${this.roomsUrl}/${roomId}`;
    return this.http.put(url, room, httpOptions).pipe(
      tap(_ => this.log(`updated room=${room}`)),
      catchError(this.handleError<any>('updateRoom'))
    );
  }

  // Handle the error
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // Print the error object
      console.error(error);

      // Add to the log
      this.log(`${operation} failed: ${error.room}`);

      // return empty result to keep running
      return of(result as T);
    };
  }

  // Log employee to the employee service
  private log(rooms: string) {
    this.add('RoomService: ' + rooms);
  }

  // Add to the rooms
  add(room: string) {
    this.rooms.push(room);
  }

  // Clear rooms
  clear() {
    this.rooms = [];
  }

}
