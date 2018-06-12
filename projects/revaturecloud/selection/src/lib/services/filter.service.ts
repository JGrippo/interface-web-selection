import { Injectable } from '@angular/core';
import { SearchParameters } from '../models/searchParameters.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  readonly defaultFilter: SearchParameters = {
    location: null,
    batch: null,
    batchMinimumPercentage: 0,
    gender: null,
    isCompletelyUnassigned: false,
  };

  subject: BehaviorSubject<SearchParameters>;

  constructor() {
    this.subject = new BehaviorSubject<SearchParameters>(this.defaultFilter);
  }

  setFilter(filter: SearchParameters) {
    this.subject.next(filter);
  }

  getFilter(): Observable<SearchParameters> {
    return this.subject.asObservable();
  }
}
