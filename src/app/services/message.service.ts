import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {MoveMessageService} from './move-message.service';
import {MoveMessage} from '../modals/MoveMessage/MoveMessage';
import {MaintenanceMessage} from '../modals/maintenanceMessage/MaintenanceMessage';
import {TransferService} from './transfer.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MessageService {

  // Maintenance messages in the rest API
  private maintenanceMessagesUrl = 'http://54.202.86.137:8080/messages/maintenance';
  // Move messages in the rest API
  private moveMessagesUrl = 'http://54.202.86.137:8080/messages/move';

  // Create constructor
  constructor(
    private http: HttpClient,
    private moveMessageService: MoveMessageService) { }

  // Get all move messages
  getAllMoves (): Observable<MoveMessage[]> {
    return this.http.get<MoveMessage[]>(this.moveMessagesUrl)
      .pipe(
        tap(moves => this.log(`fetched moves`)),
        catchError(this.handleError('getMoves', []))
      );
  }

  // Get move messages by sender
  getMoves (name: string): Observable<MoveMessage[]> {
    const url = `${this.moveMessagesUrl}/sender/${name}`;
    return this.http.get<MoveMessage[]>(url)
      .pipe(
        tap(moves => this.log(`fetched moves`)),
        catchError(this.handleError('getMoves', []))
      );
  }

  // Get all maintenance messages
  getAllMaintenance (): Observable<MaintenanceMessage[]> {
    return this.http.get<MaintenanceMessage[]>(this.maintenanceMessagesUrl)
      .pipe(
        tap(maintenance => this.log(`fetched maintenance`)),
        catchError(this.handleError('getMaintenance', []))
      );
  }

  // Get maintenance messages by sender
  getMaintenance (name: string): Observable<MaintenanceMessage[]> {
    const url = `${this.maintenanceMessagesUrl}/sender/${name}`;
    return this.http.get<MaintenanceMessage[]>(url)
      .pipe(
        tap(maintenance => this.log(`fetched maintenance`)),
        catchError(this.handleError('getMaintenance', []))
      );
  }

  // Add new move request
  addMove (move: MoveMessage): Observable<MoveMessage> {
    move.sender = TransferService.employeeName;
    return this.http.post<MoveMessage>(this.moveMessagesUrl, move, httpOptions).pipe(
      tap((move2: MoveMessage) => this.log(`added message w/ id=${move2.messageId}`)),
      catchError(this.handleError<MoveMessage>('addMove'))
    );
  }

  // Add new maintenance request
  addMaintenance (maintenance: MaintenanceMessage): Observable<MaintenanceMessage> {
    maintenance.sender = TransferService.employeeName;
    return this.http.post<MaintenanceMessage>(this.maintenanceMessagesUrl, maintenance, httpOptions).pipe(
      tap((maintenance2: MaintenanceMessage) => this.log(`added message w/ id=${maintenance2.messageId}`)),
      catchError(this.handleError<MaintenanceMessage>('addMaintenance'))
    );
  }

  // Delete move request
  deleteMove (move: MoveMessage | number): Observable<MoveMessage> {
    const id = typeof move === 'number' ? move : move.messageId;
    const url = `${this.moveMessagesUrl}/${id}`;
    return this.http.delete<MoveMessage>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted message id=${id}`)),
      catchError(this.handleError<MoveMessage>('deleteMove'))
    );
  }

  // Delete maintenance request
  deleteMaintenance (maintenance: MaintenanceMessage | number): Observable<MaintenanceMessage> {
    const id = typeof maintenance === 'number' ? maintenance : maintenance.messageId;
    const url = `${this.maintenanceMessagesUrl}/${id}`;
    return this.http.delete<MaintenanceMessage>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted message id=${id}`)),
      catchError(this.handleError<MaintenanceMessage>('deleteMaintenance'))
    );
  }

  // Add the cost of relocation
  updateMove (move: MoveMessage): Observable<MoveMessage> {
    const id = typeof move === 'number' ? move : move.messageId;
    const url = `${this.moveMessagesUrl}/${id}`;
    return this.http.put(url, move, httpOptions).pipe(
      tap(_ => this.log(`updated message price=${move.price}`)),
      catchError(this.handleError<any>('updateMove'))
    );
  }

  // Add the cost for maintenance  request
  updateMaintenance (maintenance: MaintenanceMessage): Observable<MaintenanceMessage> {
    const id = typeof maintenance === 'number' ? maintenance : maintenance.messageId;
    const url = `${this.maintenanceMessagesUrl}/${id}`;
    return this.http.put(url, maintenance, httpOptions).pipe(
      tap(_ => this.log(`updated message price=${maintenance.price}`)),
      catchError(this.handleError<any>('updateMaintenance'))
    );
  }

  // Change move request
  updateMoveContent (move: MoveMessage): Observable<MoveMessage> {
    const id = typeof move === 'number' ? move : move.messageId;
    const url = `${this.moveMessagesUrl}/${id}`;
    return this.http.put(url, move, httpOptions).pipe(
      tap(_ => this.log(`updated message =${move.message}`)),
      catchError(this.handleError<any>('updateMove'))
    );
  }

  // Change maintenance request
  updateMaintenanceContent (maintenanceMessage: MaintenanceMessage): Observable<MaintenanceMessage> {
    const id = typeof maintenanceMessage === 'number' ? maintenanceMessage : maintenanceMessage.messageId;
    const url = `${this.maintenanceMessagesUrl}/${id}`;
    return this.http.put(url, maintenanceMessage, httpOptions).pipe(
      tap(_ => this.log(`updated message =${maintenanceMessage.message}`)),
      catchError(this.handleError<any>('updateMaintenanceContent'))
    );
  }

  // Handle the error
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // Print the error object
      console.error(error);

      // Add to the log
      this.log(`${operation} failed: ${error.maintenance}`);

      // return empty result to keep running
      return of(result as T);
    };
  }

  // Log employee to the employee service
  private log(moves: string) {
    this.moveMessageService.add('MessageService: ' + moves);
  }
}
