import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tracker } from '../models/tracker.model';
import { User } from '../models/user.model';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class ChangeStore {

  private _changeTracker: BehaviorSubject<Tracker[]> = new BehaviorSubject<Tracker[]>([]);
  private _changeArray: Tracker[];
  constructor() {
  }

  addUserToRoom(user: User, room: Room) {
    let tracker: Tracker;
    tracker.User = user;
    tracker.Room = room;
    tracker.Action = 'Add';
    this._changeArray.push(tracker);
    this._changeTracker.next(this._changeArray);
  }
  removeUserFromRoomComp(user: User, room: Room) {
    let tracker: Tracker;
    tracker.User = user;
    tracker.Room = room;
    tracker.Action = 'Remove';
    this._changeArray.push(tracker);
    this._changeTracker.next(this._changeArray);
  }
  clearTrackedChanges() {
    this._changeArray = [];
    this._changeTracker.next(this._changeArray);
  }
  get rooms() {
    return this._changeTracker.asObservable();
  }
}
