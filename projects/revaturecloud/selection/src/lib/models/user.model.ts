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
