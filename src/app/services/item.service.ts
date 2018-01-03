import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {Item} from '../modals/item/Item';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ItemService {

  items: string[] = [];
  private itemsUrl = 'http://localhost:8080/items';  // URL to web api

  constructor( private http: HttpClient ) { }

  // Get all rooms
  getItems (): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl)
      .pipe(
        tap(items => this.log(`fetched items`)),
        catchError(this.handleError('getItems', []))
      );
  }

  // /** GET hero by id. Return `undefined` when id not found */
  // getHeroNo404<Employee>(id: number): Observable<Employee> {
  //   const url = `${this.heroesUrl}/?id=${id}`;
  //   return this.http.get<Employee[]>(url)
  //     .pipe(
  //       map(rooms => rooms[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} hero id=${id}`);
  //       }),
  //       catchError(this.handleError<Employee>(`getHero id=${id}`))
  //     );
  // }

  /** GET hero by id. Will 404 if id not found */
  getItem(id: number): Observable<Item> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Item>(`getItem id=${id}`))
    );
  }

  /* GET rooms whose name contains searchEmployee term */
  searchItems(term: string): Observable<Item[]> {
    if (!term.trim()) {
      // if not searchEmployee term, return empty hero array.
      return of([]);
    }
    return this.http.get<Item[]>(`http://localhost:8080/employees/${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError('searchItems', []))
    );
  }

  ////// Save methods //////////

  /** POST: add a new hero to the server */
  addItem (item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl, item, httpOptions).pipe(
      tap((item2: Item) => this.log(`added hero w/ id=${item2.barcode}`)),
      catchError(this.handleError<Item>('addItem'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteItem (item: Item | number): Observable<Item> {
    const barcode = typeof item === 'number' ? item : item.barcode;
    const url = `${this.itemsUrl}/${barcode}`;

    return this.http.delete<Item>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero barcode=${barcode}`)),
      catchError(this.handleError<Item>('deleteItem'))
    );
  }

  /** PUT: update the hero on the server */
  updateItem (item: Item): Observable<any> {
    return this.http.put(this.itemsUrl, item, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${item.barcode}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }




  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.item}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(items: string) {
    this.add('ItemService: ' + items);
  }

  add(item: string) {
    this.items.push(item);
  }

  clear() {
    this.items = [];
  }

}
