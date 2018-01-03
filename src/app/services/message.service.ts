import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {MoveMessageService} from './move-message.service';
import {MaintenanceService} from './maintenance.service';
import {MoveMessage} from '../modals/MoveMessage/MoveMessage';
import {MaintenanceMessage} from '../modals/maintenanceMessage/MaintenanceMessage';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MessageService {

  // Maintenance messages in the rest API
  private maintenanceMessagesUrl = 'http://localhost:8080/messages/maintenance';
  // Move messages in the rest API
  private moveMessagesUrl = 'http://localhost:8080/messages/move';

  constructor(
    private http: HttpClient,
    private moveMessageService: MoveMessageService, private maintenanceService: MaintenanceService) { }

  // Get all move messages
  getMoves (): Observable<MoveMessage[]> {
    return this.http.get<MoveMessage[]>(this.moveMessagesUrl)
      .pipe(
        tap(moves => this.log(`fetched moves`)),
        catchError(this.handleError('getMoves', []))
      );
  }

  // Get all maintenance messages
  getMaintenance (): Observable<MaintenanceMessage[]> {
    return this.http.get<MaintenanceMessage[]>(this.maintenanceMessagesUrl)
      .pipe(
        tap(maintenance => this.log(`fetched maintenance`)),
        catchError(this.handleError('getMaintenance', []))
      );
  }

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
  // getMovesById(id: number): Observable<MoveMessage> {
  //   const url = `${this.messagesUrl}/${id}`;
  //   return this.http.get<MoveMessage>(url).pipe(
  //     tap(_ => this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<MoveMessage>(`getMoves id=${id}`))
  //   );
  // }
  //
  // /* GET rooms whose name contains searchEmployee term */
  // searchMoves(term: string): Observable<MoveMessage[]> {
  //   if (!term.trim()) {
  //     // if not searchEmployee term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<MoveMessage[]>(`http://localhost:8080/employees/${term}`).pipe(
  //     tap(_ => this.log(`found rooms matching "${term}"`)),
  //     catchError(this.handleError('searchMoves', []))
  //   );
  // }
  //
  // ////// Save methods //////////
  //
  /** POST: add a new hero to the server */
  addMove (move: MoveMessage): Observable<MoveMessage> {
    return this.http.post<MoveMessage>(this.moveMessagesUrl, move, httpOptions).pipe(
      tap((move2: MoveMessage) => this.log(`added message w/ id=${move2.messageId}`)),
      catchError(this.handleError<MoveMessage>('addMove'))
    );
  }

  /** POST: add a new hero to the server */
  addMaintenance (maintenance: MaintenanceMessage): Observable<MaintenanceMessage> {
    return this.http.post<MaintenanceMessage>(this.maintenanceMessagesUrl, maintenance, httpOptions).pipe(
      tap((maintenance2: MaintenanceMessage) => this.log(`added message w/ id=${maintenance2.messageId}`)),
      catchError(this.handleError<MaintenanceMessage>('addMaintenance'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteMove (move: MoveMessage | number): Observable<MoveMessage> {
    const id = typeof move === 'number' ? move : move.messageId;
    const url = `${this.moveMessagesUrl}/${id}`;
console.log(id);
    return this.http.delete<MoveMessage>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted message id=${id}`)),
      catchError(this.handleError<MoveMessage>('deleteMove'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteMaintenance (maintenance: MaintenanceMessage | number): Observable<MaintenanceMessage> {
    const id = typeof maintenance === 'number' ? maintenance : maintenance.messageId;
    const url = `${this.maintenanceMessagesUrl}/${id}`;
    console.log(id);
    return this.http.delete<MaintenanceMessage>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted message id=${id}`)),
      catchError(this.handleError<MaintenanceMessage>('deleteMove'))
    );
  }

  /** PUT: update the hero on the server */
  updateMove (move: MoveMessage): Observable<MaintenanceMessage> {
    const id = typeof move === 'number' ? move : move.messageId;
    console.log(id);
    const url = `${this.moveMessagesUrl}/${id}`;
    return this.http.put(url, httpOptions).pipe(
      tap(_ => this.log(`updated message price=${move.price}`)),
      catchError(this.handleError<any>('updateMove'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.maintenance}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(moves: string) {
    this.moveMessageService.add('EmployeeService: ' + moves);
  }
}
