import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {Room} from '../modals/room/room';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class RoomService {

  rooms: string[] = [];
  private roomsUrl = 'http://localhost:8080/buildings';  // URL to web api

  constructor( private http: HttpClient ) { }

  // Get all rooms
  getRooms (): Observable<Room[]> {
    return this.http.get<Room[]>(this.roomsUrl)
      .pipe(
        tap(rooms => this.log(`fetched rooms`)),
        catchError(this.handleError('getRooms', []))
      );
  }
  //
  // // /** GET hero by id. Return `undefined` when id not found */
  // // getHeroNo404<Employee>(id: number): Observable<Employee> {
  // //   const url = `${this.heroesUrl}/?id=${id}`;
  // //   return this.http.get<Employee[]>(url)
  // //     .pipe(
  // //       map(rooms => rooms[0]), // returns a {0|1} element array
  // //       tap(h => {
  // //         const outcome = h ? `fetched` : `did not find`;
  // //         this.log(`${outcome} hero id=${id}`);
  // //       }),
  // //       catchError(this.handleError<Employee>(`getHero id=${id}`))
  // //     );
  // // }
  //
  // /** GET hero by id. Will 404 if id not found */
  // getRoom(id: number): Observable<Room> {
  //   const url = `${this.roomsUrl}/${id}`;
  //   return this.http.get<Room>(url).pipe(
  //     tap(_ => this.log(`fetched room id=${id}`)),
  //     catchError(this.handleError<Room>(`getRoom id=${id}`))
  //   );
  // }
  //
  // /* GET rooms whose name contains searchEmployee term */
  // searchRooms(term: string): Observable<Room[]> {
  //   if (!term.trim()) {
  //     // if not searchEmployee term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<Room[]>(`http://localhost:8080/employees/${term}`).pipe(
  //     tap(_ => this.log(`found users matching "${term}"`)),
  //     catchError(this.handleError('searchRooms', []))
  //   );
  // }

  ////// Save methods //////////

  /** POST: add a new hero to the server */
  addRoom (room: Room): Observable<Room> {
    return this.http.post<Room>(this.roomsUrl, room, httpOptions).pipe(
      tap((room2: Room) => this.log(`added hero w/ id=${room2.roomId}`)),
      catchError(this.handleError<Room>('addRoom'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteRoom (room: Room | number): Observable<Room> {
    const roomId = typeof room === 'number' ? room : room.roomId;
    const url = `${this.roomsUrl}/${roomId}`;

    return this.http.delete<Room>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero roomId=${roomId}`)),
      catchError(this.handleError<Room>('deleteRoom'))
    );
  }

  // /** PUT: update the hero on the server */
  // updateRoom (room: Room): Observable<any> {
  //   return this.http.put(this.roomsUrl, room, httpOptions).pipe(
  //     tap(_ => this.log(`updated room id=${room.roomId}`)),
  //     catchError(this.handleError<any>('updateRooom'))
  //   );
  // }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.room}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(rooms: string) {
    this.add('RoomService: ' + rooms);
  }

  add(room: string) {
    this.rooms.push(room);
  }

  clear() {
    this.rooms = [];
  }

}
