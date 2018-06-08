///  <summary>
///    An object representing the expected output from the
///    housing selection API endpoints "/Rooms/" and "/Rooms/ComplexObject".
///  </summary>
///  <remarks>
///    Endpoints which return this object:
///    "https://github.com/mjbradvica/service-hub-housing-ui-wiki/wiki/Housing-Selection-API-Endpionts"
///      (GET) All Rooms - /Rooms
///      (GET) All Rooms in One Location - /Rooms/ComplexObject
///      (GET) All Rooms With Unassigned Bed By Gender - /Rooms/ComplexObject
///      (GET) All Rooms With All Unassigned Bed By Gender - /Rooms/ComplexObject
///      (GET) All Rooms With Unassigned Bed By Gender/Batch Percentage - /Rooms/ComplexObject
///
///    The service-hub-housing-wiki's page on this object:
///    "https://github.com/mjbradvica/service-hub-housing-ui-wiki/wiki/Room-Model"
///  </remarks>

import { Address } from "./address.model";

export class Room {
  RoomId: string;
  Location: string;
  Address: Address;
  Vacancy: number;
  Occupancy: number;
  Gender: string;
}
