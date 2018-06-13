import { Component, OnInit, Input } from '@angular/core';
import { MatCard } from '@angular/material';
import { Room } from '../../models/room.model';
import { Address } from '../../models/address.model';

@Component({
  selector: 'lib-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {

  @Input() room: Room;
  constructor() { }

  ngOnInit() {
  }


  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {

  }
}


