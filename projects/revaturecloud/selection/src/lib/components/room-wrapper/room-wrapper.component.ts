import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, PipeTransform, Pipe } from '@angular/core';
import { Room } from '../../models/room.model';
import { Address } from '../../models/address.model';
import { MatPaginator, MatTableDataSource, MatSort, PageEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { RoomStore } from '../../stores/room.store';


@Component({
  selector: 'lib-room-wrapper',
  templateUrl: './room-wrapper.component.html',
  styleUrls: ['./room-wrapper.component.css']
})
export class RoomWrapperComponent implements OnInit, OnDestroy {
  displayedColumns = ['roomId', 'location', 'address', 'vacancy', 'occupancy', 'gender'];
  dataSource: MatTableDataSource<Room>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  rooms: Room[];
  roomsPage: Room[];
  searchRooms = '';
  pageEvent: PageEvent;
  pageOptions = [4, 8, 12];

  constructor(private roomStore: RoomStore) {
  }

  ngOnInit() {
    this.roomStore.rooms
      .subscribe((rooms: Room[]) => {
        this.rooms = rooms;
      });
    this.roomsPage = this.rooms;
  }

  updateArray() {
    let start = this.pageEvent.pageSize * this.pageEvent.pageIndex;
    let end;
    if (start + this.pageEvent.pageSize > this.pageEvent.length) {
      end = this.pageEvent.length;
    } else {
      end = start + this.pageEvent.pageSize;
    }
    this.roomsPage = this.rooms.slice(start, end);
  }

  ngOnDestroy() {
  }
}


@Pipe({
  name: 'roomSearch',
  pure: false
})
export class RoomSearchPipe implements PipeTransform {
  transform(value: any, searchString: string): any {
    if (value.length === 0 || searchString === '') {
      return value;
    }
    const foundRooms = [];
    for (const room of value) {
      if (room.location.toLowerCase().includes(searchString)
        || room.gender.toLowerCase().includes(searchString)
        || room.address.address1.toLowerCase().includes(searchString)
        // || room.address.address2.toLowerCase().includes(searchString)
        || room.address.city.toLowerCase().includes(searchString)
        || room.address.state.toLowerCase().includes(searchString)
        || room.address.postalCode == searchString
        || room.address.country.toLowerCase().includes(searchString)) {
        foundRooms.push(room);
      }
    }
    return foundRooms;
  }
}
