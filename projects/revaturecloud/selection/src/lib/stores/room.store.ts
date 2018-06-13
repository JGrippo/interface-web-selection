/**
 * A service for interacting with the room data.
 *
 * Encapsulates the SelectionService for component use.
 */

import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';
import { BehaviorSubject } from 'rxjs';
import { SelectionService } from '../services/selection.service';

@Injectable({
  providedIn: 'root'
})
export class RoomStore {

  private _roomSubject: BehaviorSubject<Room[]> = new BehaviorSubject<Room[]>([]);


  constructor(private selectionService: SelectionService) {
    this.loadInitData();
  }

  /**
   * Sets up the subscription connection with selectionService.
   */
  private loadInitData() {
    // Subscribes to the SelectionService
    this.selectionService.getAllRooms()
      .pipe(

      )
      .subscribe(
        res => this._roomSubject.next(res)
      );
  }

  /**
   * Returns an observable for the room data
   */
  get rooms() {
    return this._roomSubject.asObservable();
  }
}
