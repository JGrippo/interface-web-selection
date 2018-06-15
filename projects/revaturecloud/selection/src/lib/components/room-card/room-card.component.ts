/**
 * A component for displaying individual room information.
 *
 * Provides functionality for assigning users to this room.
 */

import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../../models/room.model';
import { User } from '../../models/user.model';
@Component({
  selector: 'lib-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {

  @Input() room: Room;
  roomPlus: Room;

  constructor() {
  }

  ngOnInit() {
    this.roomPlus = JSON.parse(JSON.stringify(this.room));
    if (!this.roomPlus.users) {
      this.roomPlus.users = [];
    }
      for (let i = 0; i < this.room.vacancy; i++) {
        this.roomPlus.users.push(
          {
          id: null,
          location: null,
          email: null,
          gender: 'fill',
          type: null,
          name: null,
          address: null
        });
    }
  }

  ngOnDestroy() {

  }
}


