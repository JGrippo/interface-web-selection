import { Injectable } from '@angular/core';
import { SelectionService } from './selection.service';

import { User } from "../models/user.model";
import { Room } from "../models/room.model";
import { ChangeStore } from '../stores/change.store';
import { UserStore } from "../stores/user.store";
import { RoomStore } from '../stores/room.store';

@Injectable({
  providedIn: 'root'
})
export class PutService {

  constructor(
    private service: SelectionService,
    private store: ChangeStore,
    private uStore: UserStore,
    private rStore: RoomStore) { }

  assign(user: User, room: Room): void {

    this.service.addUserToRoom(
      {userId: user.id, roomId: room.roomId}
    ).subscribe((res) => {
      this.store.addUserToRoom(user, room);
      this.uStore.updateUsers();
      this.rStore.updateRooms();
    });
  }

  unassign(user: User, room: Room): void {
    this.service.removeUserFromRoom(
      {userId: user.id, roomId: room.roomId}
    ).subscribe((res) => {
      this.store.removeUserFromRoom(user, room);
      this.uStore.updateUsers();
      this.rStore.updateRooms();
    });
  }
}
