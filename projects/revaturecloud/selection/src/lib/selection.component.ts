/**
*     makes use of SelectionService by calling methods by either setting
*     retrieved data to component fields
*     or sending data to api through service
*/

import { Component, OnInit } from '@angular/core';
import { SelectionService } from './selection.service';
import { Room } from './models/room.model';
import { Observable } from 'rxjs';
import { RoomAssociation } from './models/roomAssociation.model';
import { Response, ResponseOptions } from '@angular/http';
import { SearchParameters } from './models/searchParameters.model';
import { UserModel } from './models/user.model';

@Component({
  selector: 'lib-selection',
  template: '<p></p>',
  styles: []
})
export class SelectionComponent implements OnInit {
  rooms: Room[];
  users: UserModel[];

  constructor(private service: SelectionService) { }

  ngOnInit() {
  }


  /**
  *     calls getAllRooms from service and sets component rooms to retrieved data
  */
  getAllRoomsComp(): Room[] {
    this.service.getAllRooms().subscribe((data: Room[]) =>
      this.rooms = data,    // sets rooms to retrieved data
      (err: any) => console.log('Error Status ' + err.status + ', Error : ' + err),    // logs errors
      () => console.log('Retrieved Rooms'));    // logs success
      return this.rooms;
  }

  /**
  *     adds user to room via roomAssociation (UserId, RoomId)
  */
  addUserToRoomComp(roomAssociation: RoomAssociation): void {
    this.service.addUserToRoom(roomAssociation).subscribe((response: Response) =>
      (err: any) => console.log('Error Status' + err.status));
  }

  /**
  *     removes user from room via roomAssociation (UserId, RoomId)
  */
  removeUserFromRoomComp(roomAssociation: RoomAssociation): void {
    this.service.removeUserFromRoom(roomAssociation).subscribe((response: Response) =>
      (err: any) => console.log('Error Status' + err.status));
  }

  /**
  *     gets list of rooms via ComplexRequest search query (Location, Batch, BatchMinimumPercentage, Gender, IsCompletelyUnassigned)
  */
  getComplexRequestOfRoomsComp(searchParameters: SearchParameters): void {
    this.service.getComplexRequestOfRooms(searchParameters).subscribe((data: Room[]) =>
      this.rooms = data,
      (err: any) => console.log('Error Status ' + err.status + ', Error : ' + err),
      () => console.log('Retrieved Rooms'));
  }

  /**
  *      calls getAllUnassignedUsers from service and sets component users to retrieved data
  */
  getAllUnassignedUsersComp(): void {
    this.service.getAllUnassignedUsers().subscribe((data: UserModel[]) =>
      this.users = data,
      (err: any) => console.log('Error Status' + err.status + ', Error : ' + err),
      () => console.log('Retrieved Users'));
  }

  /**
  *      calls getAllUsers from service and sets component users to retrieved data
  */
  getAllUsersComp(): void {
    this.service.getAllUsers().subscribe((data: UserModel[]) =>
      this.users = data,
      (err: any) => console.log('Error Status ' + err.status + ', Error : ' + err),
      () => console.log('Retrieved Users'));
  }
}
