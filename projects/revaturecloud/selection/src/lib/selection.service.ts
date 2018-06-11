///  <summary>
///    HTTP service for intaracting with RESTful housing selection service.
///  </summary>
///  <seealso cref='https://github.com/mjbradvica/service-hub-housing-ui-wiki/wiki/Housing-Selection-API-Endpionts'/>
///  <remarks>
///    As the housing selection service is itself a work in progress, this file is subject to change as
///    the structure of the API this service consumes also changes.
///  </remarks>

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { RoomAssociation } from './models/roomAssociation.model';
import { SearchParameters } from './models/searchParameters.model';
import { Room } from './models/room.model';
import { UserModel } from './models/user.model';
@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  readonly rootUrl = 'https://my-json-server.typicode.com/JGrippo/selectiondb';

  readonly apiEpAddToRoom = '/Room/Add';
  readonly apiEpRemoveFromRoom = '/Room/Remove';
  readonly apiEpBatches = '/Batches';
  readonly apiEpRooms = '/Rooms';
  readonly apiEpUsers = '/Users';
  readonly apiEpUnassignedUsers = '/Users/Unassigned';
  readonly apiEpRoomsComplexRequest = '/Rooms/ComplexObject';

  readonly sentAsUrlEnc = new HttpHeaders().set('Content-Type', 'x-www-form-urlencoded');
  readonly sentAsJson = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  addUserToRoom(roomAssociation: RoomAssociation) {
    return this.http.put(this.rootUrl + this.apiEpAddToRoom, roomAssociation, {headers: this.sentAsJson})
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  removeUserFromRoom(roomAssociation: RoomAssociation) {
    return this.http.put(this.rootUrl + this.apiEpRemoveFromRoom, roomAssociation, {headers: this.sentAsJson})
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  ///  <summary>
  ///    Gets collection of rooms that satisfy the specified search parameters.
  ///  </summary>
  getComplexRequestOfRooms(searchParameters: SearchParameters): Observable<Room[]> {
    return this.http.get<Room[]>(this.rootUrl + this.apiEpRoomsComplexRequest,
      { params: this.convertSearchParsObjToParams(searchParameters), headers: this.sentAsUrlEnc })
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  ///  <summary>
  ///    Gets all rooms.
  ///  </summary>
  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.rootUrl + this.apiEpRooms)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  ///  <summary>
  ///    Gets all unassigned users.
  ///  </summary>
  getAllUnassignedUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.rootUrl + this.apiEpUnassignedUsers)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  ///  <summary>
  ///    Gets all users.
  ///  </summary>
  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.rootUrl + this.apiEpUsers)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  ///  <summary>
  ///    Initial template for basic common error handling.
  ///  </summary>
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  } // TODO ensure method is fully applicable to use case.

  ///  <summary>
  ///    Method to convert Search SearchParameters to HttpParams.
  ///  </summary>
  ///  <seealso cref='https://github.com/mjbradvica/service-hub-housing-ui-wiki/wiki/Housing-Selection-API-Endpionts'/>
  ///  <remarks>
  ///    According to the documentation in the see also section, it seems as if the API endpoint
  ///    “/Rooms/ComplexObject” almost expects a Json object to be passed in the body of a get
  ///    request, which is something that is not supported.  This may change in the future, but to
  ///    accommodate this behavior this method has been created to convert such an object to search
  ///    parameters that will be passed along with the request.
  ///  </remarks>

  private convertSearchParsObjToParams(searchParameters: SearchParameters) {
    return new HttpParams()
      .set('Batch', searchParameters.batch)
      .set('BatchMinimumPercentage', searchParameters.batchMinimumPercentage.toString())
      .set('Gender', searchParameters.gender)
      .set('IsCompletelyUnassigned', searchParameters.isCompletelyUnassigned.toString())
      .set('Location', searchParameters.location);
  }
}
