/// <summary>
///     makes use of SelectionService by calling methods by either setting
///     retrieved data to component fields
///     or sending data to api through service
/// </summary>

import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../public_api';
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


  /// <summary>
  ///     calls getAllRooms from service and sets component rooms to retrieved data
  /// </summary>
  getAllRoomsComp(): void {
    this.service.getAllRooms().subscribe((data: Room[]) =>
      this.rooms = data,    // sets rooms to retrieved data
      (err: any) => console.log('Error Status ' + err.status + ', Error : ' + err),    // logs errors
      () => console.log('Retrieved Rooms'));    // logs success
  }

  /// <summary>
  ///     adds user to room via roomAssociation (UserId, RoomId)
  /// </summary>
  addUserToRoomComp(roomAssociation: RoomAssociation): void {
    this.service.addUserToRoom(roomAssociation).subscribe((response: Response) =>
      (err: any) => console.log('Error Status' + err.status));
  }

  /// <summary>
  ///     removes user from room via roomAssociation (UserId, RoomId)
  /// </summary>
  removeUserFromRoomComp(roomAssociation: RoomAssociation): void {
    this.service.removeUserFromRoom(roomAssociation).subscribe((response: Response) =>
      (err: any) => console.log('Error Status' + err.status));
  }

  /// <summary>
  ///     gets list of rooms via ComplexRequest search query (Location, Batch, BatchMinimumPercentage, Gender, IsCompletelyUnassigned)
  /// </summary>
  getComplexRequestOfRoomsComp(searchParameters: SearchParameters): void {
    this.service.getComplexRequestOfRooms(searchParameters).subscribe((data: Room[]) =>
      this.rooms = data,
      (err: any) => console.log('Error Status ' + err.status + ', Error : ' + err),
      () => console.log('Retrieved Rooms'));
  }

  /// <summary>
  ///      calls getAllUnassignedUsers from service and sets component users to retrieved data
  /// </summary>
  getAllUnassignedUsersComp(): void {
    this.service.getAllUnassignedUsers().subscribe((data: UserModel[]) =>
      this.users = data,
      (err: any) => console.log('Error Status' + err.status + ', Error : ' + err),
      () => console.log('Retrieved Users'));
  }

  /// <summary>
  ///      calls getAllUsers from service and sets component users to retrieved data
  /// </summary>
  getAllUsersComp(): void {
    this.service.getAllUsers().subscribe((data: UserModel[]) =>
      this.users = data,
      (err: any) => console.log('Error Status ' + err.status + ', Error : ' + err),
      () => console.log('Retrieved Users'));
  }

}
