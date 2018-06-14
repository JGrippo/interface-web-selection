/**
 * A component for displaying individual room information.
 *
 * Provides functionality for assigning users to this room.
 */

import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../../models/room.model';
import { User } from '../../models/user.model';
import { UserStore } from '../../stores/user.store';
@Component({
  selector: 'lib-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {

  @Input() room: Room;
  users: User[];

  constructor(private userStore: UserStore) {  }

  ngOnInit() {
    this.userStore.users.subscribe((data: any) => {
      this.users = data;
    });
    this.getUsers(this.room.roomId);
  }

  getUsers(id: string) {
    this.users = this.users.filter( (usr:User) => {
        if(usr && usr.room) {
          return usr.room.roomId === id;
        }
        else {
          return false;
        }
      });
  }

  ngOnDestroy() {

  }
}


