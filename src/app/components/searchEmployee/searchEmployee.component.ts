import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Employee} from '../../modals/employee/Employee';
import {FmisService} from '../../services/fmis.service';

@Component({
  selector: 'app-search',
  templateUrl: './searchEmployee.component.html',
  styleUrls: ['./searchEmployee.component.css']
})

export class SearchComponent implements OnInit {

  employees$: Observable<Employee[]>;
  private searchTerms = new Subject<string>();

  constructor(private fmisService: FmisService) {}

  // Push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
    console.log(term);
  }

  ngOnInit(): void {
    this.employees$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.fmisService.searchHeroes(term)),
    );
  }

}
