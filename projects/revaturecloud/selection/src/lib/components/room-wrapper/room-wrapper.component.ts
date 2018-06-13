import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Room } from '../../models/room.model';
import { SelectionService, SelectionComponent } from '../../../public_api';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Address } from '../../models/address.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'lib-room-wrapper',
  templateUrl: './room-wrapper.component.html',
  styleUrls: ['./room-wrapper.component.css']
})
export class RoomWrapperComponent implements OnInit {
  displayedColumns = ['roomId', 'location', 'address', 'vacancy', 'occupancy', 'gender'];
  dataSource: MatTableDataSource<Room>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  rooms: Room[];

  constructor(private selecitonService: SelectionService) {
  }

  ngOnInit() {
    this.selecitonService.getAllRooms()
    .subscribe((rooms: Room[]) => {
      console.log(rooms);
      this.rooms = rooms;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngOnDestroy() {
  }
}
