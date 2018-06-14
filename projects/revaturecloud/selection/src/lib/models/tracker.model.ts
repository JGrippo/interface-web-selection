import { User } from "./user.model";
import { Room } from "./room.model";

export class Tracker {
  user: User;
  room: Room;
  action: string;
}