import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../public_api';
import { Room } from './models/room.model';
import { Observable } from 'rxjs';
import { RoomAssociation } from './models/roomAssociation.model';
import { Response, ResponseOptions } from '@angular/http';

@Component({
  selector: 'lib-selection',
  template: '<p></p>',
  styles: []
})
export class SelectionComponent implements OnInit {
  rooms: Room[];

  constructor(private service: SelectionService) { }

  ngOnInit() {
  }


  /// <summary>
  ///     calls getAllRooms from service and sets component rooms to retrieved data\
  /// </summary>
  getRooms(): void {
    this.service.getAllRooms().subscribe((data: Room[]) =>
      this.rooms = data,    // sets rooms to retrieved data
      (err: any) => console.log(err),    // logs errors
      () => console.log('Retrieved Rooms'));    // logs success
  }

  addUserToRoom(roomAssociation: RoomAssociation): void {
    this.service.addUserToRoom(roomAssociation).subscribe((response: Response) =>
      (err: any) => console.log('Error Status' + err.status));
  }

  removeUserFromRoom(roomAssociation: RoomAssociation): void {
    this.service.removeUserFromRoom(roomAssociation).subscribe((response: Response) =>
      (err: any) => console.log('Error Status' + err.status));
  }

}
