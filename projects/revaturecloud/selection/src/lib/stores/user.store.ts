/**
 * A service for interfacing with the user data.
 *
 * Encapsulates the SelectionService for component use.
 */

import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { SelectionService } from '../services/selection.service';
import { FilterService } from '../services/filter.service';
import { SearchParameters } from '../models/searchParameters.model';

@Injectable({
  providedIn: 'root'
})
export class UserStore {

  private _userSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  private _filter: SearchParameters;

  constructor (
    private backendService: SelectionService,
    private filterService: FilterService
  ) {
    this.loadInitData();
  }

  /**
   * Sets up the subscription connection with selectionService.
   */
  loadInitData(): void {
    // Subscribes to the SelectionService
    this.backendService.getAllUsers()
      .pipe (

      )
      .subscribe(
        res => this._userSubject.next(res)
      );

    // Subscribes to the FilterService
    this.filterService.getFilter()
      .subscribe(
        (res) => {
          this._filter = res;
        }
      );
  }

  /**
   * Returns the subscription
   */
  get users(): Observable<User[]> {
    return this._userSubject.asObservable();
  }

  /**
   * Resubscribe to the backend service call with the updated filter.
   */
  updateUsers(): void {
    this.backendService.getComplexRequestOfUsers(this._filter)
      .subscribe(
        (res) => {
          this._userSubject.next(res);
        },
        (err: any) => {
          console.log(err);
        }
      );
  }
}
