import { Component, OnInit } from '@angular/core';

import { Room } from "../models/room";
import { Address } from "../models/address";
import { ROOMS } from "../models/mock-rooms";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  Rooms: Room[];

  constructor() { }

  ngOnInit() {
    this.Rooms = ROOMS;
  }

}
