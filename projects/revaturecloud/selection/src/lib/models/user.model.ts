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

export class UserModel {
  Id: string;
  Location: string;
  Address: Address;
  Email: string;
  Name: Name;
  Gender: string;
  Type: string;
}
