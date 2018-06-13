import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Room } from '../../models/room.model';
import { SelectionService, SelectionComponent } from '../../../public_api';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Address } from '../../models/address.model';


@Component({
  selector: 'lib-room-wrapper',
  templateUrl: './room-wrapper.component.html',
  styleUrls: ['./room-wrapper.component.css']
})
export class RoomWrapperComponent implements AfterViewInit {
  displayedColumns = ['roomId', 'location', 'address', 'vacancy', 'occupancy', 'gender'];
  dataSource: MatTableDataSource<Room>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  rooms: Room[];

  constructor(private selecitonService: SelectionService) {
    selecitonService.getAllRooms().subscribe((rooms: Room[]) => {
      this.rooms = rooms;
      console.log(rooms);
    });
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
