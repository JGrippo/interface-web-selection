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

  constructor() {  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }
}


