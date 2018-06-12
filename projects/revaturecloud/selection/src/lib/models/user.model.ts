/**
* An object representing the expected output from the
* housing selection API endpoints "/Users/" and "/Users/Unassigned".
*
* Endpoints which return this object:
* "https://github.com/mjbradvica/service-hub-housing-ui-wiki/wiki/Housing-Selection-API-Endpionts"
*   (GET) All Users - /Users
*   (GET) All Users Without A Room - /Users/Unassigned
*
* The service-hub-housing-wiki's page on this object:
* "https://github.com/mjbradvica/service-hub-housing-ui-wiki/wiki/User-Model"
*/

import { Address } from "./address.model";
import { Name } from "./name.model";
import { Batch } from "./batch.model";
import { Room } from "./room.model";

export class User {
  id: string;
  location: string;
  email: string;
  gender: string;
  type: string;

  batch: Batch;
  room: Room;
  name: Name;
  address: Address;
}
