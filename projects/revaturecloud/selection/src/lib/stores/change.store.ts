import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SelectionService } from '../services/selection.service';
import { Tracker } from '../models/tracker.model';
import { User } from '../models/user.model';
import { Room } from '../models/room.model';

@Injectable({
    providedIn: 'root'
})
export class ChangeStore {

    private _changeTracker: BehaviorSubject<Tracker[]> = new BehaviorSubject<Tracker[]>([]);

    constructor() {
    }

    addUserToRoom(user: User, room: Room){
        _changeTracker =_changeTracker
    }
    get rooms() {
        return this._changeTracker.asObservable();
    }
}
