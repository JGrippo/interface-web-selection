import { Injectable } from '@angular/core';
import { SearchParameters } from '../models/searchParameters.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filter: Subject<SearchParameters>;

  constructor() {
    this.filter = new Subject<SearchParameters>();
  }

  setFilter(filter: SearchParameters) {
    this.filter.next(filter);
  }

  getFilter(): Observable<SearchParameters> {
    return this.filter.asObservable();
  }
}
