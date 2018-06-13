import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';
import { BehaviorSubject } from 'rxjs';
import { SelectionService } from '../services/selection.service';
import { SearchParameters } from '../models/searchParameters.model';
import { FilterService } from '../services/filter.service';

@Injectable({
  providedIn: 'root'
})
export class RoomStore {

  private _roomSubject: BehaviorSubject<Room[]> = new BehaviorSubject<Room[]>([]);
  private _filter: SearchParameters;


  constructor(
    private backendService: SelectionService,
    private filterService: FilterService
  ) {
    this.loadInitData();
  }

  loadInitData() {
    this.backendService.getAllRooms()
      .pipe(

      )
      .subscribe(
        res => this._roomSubject.next(res)
      );

      this.filterService.getFilter()
      .subscribe(
        res => {
          this._filter = res;
        }
      );
  }

  get rooms() {
    return this._roomSubject.asObservable();
  }

  updateRooms() {
    console.log('THIS IS ROOMS');
    this.backendService.getComplexRequestOfRooms(this._filter)
      .subscribe(
        (res) => { this._roomSubject.next(res);
                   console.log(res); },
        (err: any) => { console.log(err); }
      );
  }

}
