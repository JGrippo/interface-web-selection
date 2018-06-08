///  <summary>
///    An object representing the Name field in the
///    User object returned in the housing selection API.
///  </summary>
///  <remarks>
///    Endpoints which return this object as a nested object:
///    "https://github.com/mjbradvica/service-hub-housing-ui-wiki/wiki/Housing-Selection-API-Endpionts"
///      (GET) All Users - /Users
///      (GET) All Users Without A Room - /Users/Unassigned
///
///    The service-hub-housing-wiki's page on this object:
///    "https://github.com/mjbradvica/service-hub-housing-ui-wiki/wiki/User-Model"
///      Name - Custom class First - string, Middle - string, Last - string
///  </remarks>

export class Name {
  First: string;
  Middle: string;
  Last: string;
}
