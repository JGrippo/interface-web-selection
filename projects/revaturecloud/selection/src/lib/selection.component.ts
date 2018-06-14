/**
*     makes use of SelectionService by calling methods by either setting
*     retrieved data to component fields
*     or sending data to api through service
*/

import { Component, OnInit } from '@angular/core';
import { Room } from './models/room.model';
import { RoomAssociation } from './models/roomAssociation.model';
import { SearchParameters } from './models/searchParameters.model';
import { User } from './models/user.model';
import { UserStore } from './stores/user.store';
import { RoomStore } from './stores/room.store';

@Component({
  selector: 'lib-selection',
  templateUrl: 'selection.component.html',
  styles: []
})
export class SelectionComponent implements OnInit {
  rooms: Room[];
  users: User[];

  constructor(
    private userStore: UserStore,
    private roomStore: RoomStore
  ) { }

  ngOnInit() {
    this.getAllUsersComp();
    this.getAllRoomsComp();
  }


  /**
  *     calls getAllRooms from service and sets component rooms to retrieved data
  */

  getAllRoomsComp(): void {
    this.roomStore.rooms.subscribe(
      res => {
        this.rooms = res;
      },
      (err: any) => {
        console.log('Error Status ' + err.status + ', Error : ' + err);
      }
    );
  }

  /**
  *     adds user to room via roomAssociation (UserId, RoomId)
  */
  addUserToRoomComp(roomAssociation: RoomAssociation): void {
    // this.service.addUserToRoom(roomAssociation).subscribe((response: Response) =>
    //   (err: any) => console.log('Error Status' + err.status));
  }

  /**
  *     removes user from room via roomAssociation (UserId, RoomId)
  */
  removeUserFromRoomComp(roomAssociation: RoomAssociation): void {
    // this.service.removeUserFromRoom(roomAssociation).subscribe((response: Response) =>
    //   (err: any) => console.log('Error Status' + err.status));
  }

  /**
  *     gets list of rooms via ComplexRequest search query (Location, Batch, BatchMinimumPercentage, Gender, IsCompletelyUnassigned)
  */
  getComplexRequestOfRoomsComp(searchParameters: SearchParameters): void {
    // this.service.getComplexRequestOfRooms(searchParameters).subscribe((data: Room[]) =>
    //   this.rooms = data,
    //   (err: any) => console.log('Error Status ' + err.status + ', Error : ' + err),
    //   () => console.log('Retrieved Rooms'));
  }

  /**
  *      calls getAllUnassignedUsers from service and sets component users to retrieved data
  */
  getAllUnassignedUsersComp(): void {
    // this.service.getAllUnassignedUsers().subscribe((data: User[]) =>
    //   this.users = data,
    //   (err: any) => console.log('Error Status' + err.status + ', Error : ' + err),
    //   () => console.log('Retrieved Users'));
  }

  /**
  *      calls getAllUsers from service and sets component users to retrieved data
  */
  getAllUsersComp(): void {
    this.userStore.users.subscribe(
      res => {
        this.users = res;
      },
      (err: any) => {
        console.log('Error Status ' + err.status + ', Error : ' + err);
      }
    );
  }
}
