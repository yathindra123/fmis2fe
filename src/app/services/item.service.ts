import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {Item} from '../modals/item/Item';

// Http Options
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ItemService {

  items: string[] = [];

  // URL to connect
  private itemsUrl = 'http://localhost:8080/items';

  // Create constructor
  constructor( private http: HttpClient ) { }

  // Get all items
  getItems (): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl)
      .pipe(
        tap(items => this.log(`fetched items`)),
        catchError(this.handleError('getItems', []))
      );
  }

  // Add an item
  addItem (item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl, item, httpOptions).pipe(
      tap((item2: Item) => this.log(`added item w/ id=${item2.barcode}`)),
      catchError(this.handleError<Item>('addItem'))
    );
  }

  // Delete an item
  deleteItem (item: Item | number): Observable<Item> {
    const barcode = typeof item === 'number' ? item : item.barcode;
    const url = `${this.itemsUrl}/${barcode}`;

    return this.http.delete<Item>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted item barcode=${barcode}`)),
      catchError(this.handleError<Item>('deleteItem'))
    );
  }

  // Update an item
  updateItem (item: Item): Observable<Item> {
    const barcode = typeof item === 'number' ? item : item.barcode;
    const url = `${this.itemsUrl}/${barcode}`;
    return this.http.put(url, item, httpOptions).pipe(
      tap(_ => this.log(`updated item=${item}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }

  // Handle the error
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // Print the error object
      console.error(error);

      // Add to the log
      this.log(`${operation} failed: ${error.item}`);

      // return empty result to keep running
      return of(result as T);
    };
  }

  // Log item to the item service
  private log(items: string) {
    this.add('ItemService: ' + items);
  }

  // Add to the log
  add(item: string) {
    this.items.push(item);
  }

  // Clear the log
  clear() {
    this.items = [];
  }

}
