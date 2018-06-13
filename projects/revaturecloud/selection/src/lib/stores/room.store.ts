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

  loadInitData() {
    this.selectionService.getAllRooms()
      .pipe(

      )
      .subscribe(
        res => this._roomSubject.next(res)
      );
  }

  get rooms() {
    return this._roomSubject.asObservable();
  }
}
