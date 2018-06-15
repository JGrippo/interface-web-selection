import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { PutService } from '../../services/put.service';
import { RoomStore } from '../../stores/room.store';
import { Room } from '../../models/room.model';
@Component({
  selector: 'lib-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;

  constructor(private putService: PutService, private roomStoreService: RoomStore) {}

  ngOnInit() {}
  addToFirstAvailable() {
    let allRoomsBasedOnCurrentFilter;
    this.roomStoreService.rooms.subscribe((data: Room[]) => {
      allRoomsBasedOnCurrentFilter = JSON.parse(JSON.stringify(data));
    });
    const allAvailableRoomsBasedOnCurrentFilter: Room[] = allRoomsBasedOnCurrentFilter.filter(
      (rm: Room) => {
        if (rm.vacancy) {
          return (rm.vacancy > 0);
        } else {
          return false;
        }
      });
    const availableRoom: Room = allAvailableRoomsBasedOnCurrentFilter[0];
    this.putService.assign(this.user, availableRoom);
    /**
     * Debuger info:
     * console.log('addToFirstAvailable has been called!');
     * console.log('allRoomsBasedOnCurrentFilter to JSON string:');
     * console.log(JSON.stringify(allRoomsBasedOnCurrentFilter));
     * console.log('allAvailableRoomsBasedOnCurrentFilter to JSON string:');
     * console.log(JSON.stringify(allAvailableRoomsBasedOnCurrentFilter));
     * console.log('availableRoom to JSON string:');
     * console.log(JSON.stringify(availableRoom));
     * console.log('user to JSON string:');
     */
  }

}
