import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { RoomAssociation } from './models/roomAssociation.model';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  readonly rootUrl = 'https://my-json-server.typicode.com/JGrippo/selectiondb';
  readonly apiEpAddToRoom = '/Room/Add';
  readonly apiEpRemoveFromRoom = '/Room/Remove';
  readonly apiEpBatches = '/Batches';
  readonly apiEpRooms = '/Rooms';
  readonly apiEpRoomsComplexRequest = '/Rooms/ComplexObject'

  constructor(private http: HttpClient) { }

  addUserToRoom(roomAssociation: RoomAssociation) {
    return this.http.put(this.rootUrl + this.apiEpAddToRoom, roomAssociation)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
  removeUserFromRoom(roomAssociation: RoomAssociation) {
    return this.http.put(this.rootUrl + this.apiEpRemoveFromRoom, roomAssociation)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  // getAllRooms(queryString: ComplexObjectFilterComponent,
  //   onSuccess,
  //   onFail) {
  //   const req = this.http.get(this.rootUrl + '/Rooms?' + queryString.complexObject());
  //   const promise = req.toPromise();

  //   promise.then(
  //     onSuccess,
  //     onFail
  //   );
  // }

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
  }; //TODO ensure method is fully applicable to use case.

  methodTestEx() {
    console.log('has been called');
  }
}
