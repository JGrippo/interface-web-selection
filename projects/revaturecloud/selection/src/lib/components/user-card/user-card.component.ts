import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { PutService } from '../../services/put.service';
import { RoomStore } from '../../stores/room.store';
import { Room } from '../../models/room.model';

/**
 * The user card component. Displays information about an individual user.
 * Provides logic for assigned the user to first available
 */

@Component({
  selector: 'lib-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;

  constructor(
    private putService: PutService,
    private roomStoreService: RoomStore
  ) {}

  ngOnInit() {}

  /**
   * Adds this user to the first available room.
   */
  addToFirstAvailable() {
    let room: Room = this.roomStoreService.roomsValue.find((room) => {
      if (room.vacancy && room.gender && room.location) {
        return room.vacancy > 0 && room.gender === this.user.gender && room.location === this.user.location;
      } else {
        return false;
      }
    });

    this.putService.assign(this.user, room);
  }

  /**
   * Forwards the output of the User static function.
   */
  private isMale(): boolean {
    return User.isMale(this.user);
  }
  private isFemale(): boolean {
    return User.isFemale(this.user);
  }

  /**
   * Checks the user's address field to see if the user is assigned housing.
   */
  private isHoused(): boolean {
    console.log(this.user.name.last + " | " + this.user.address);
    return this.user.address !== null;
  }
}
