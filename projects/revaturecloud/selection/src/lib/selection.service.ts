import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { ComplexObjectFilterComponent } from './complex-object-filter/complex-object-filter.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './models/room.model';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  // readonly rootUrl = environment.rootUrl;  //TODO: Implement this.
  readonly rootUrl = 'https://www.rooturl.com';
  private testUrl = 'https://my-json-server.typicode.com/JGrippo/selectiondb/Rooms';

  constructor(private http: HttpClient) { }

  addUserToRoom(userId: string, roomId: string) {
    return this.http.put(this.rootUrl + '/Room/Add', {
      UserId: userId,
      RoomId: roomId
    });
  }
  removeUserFromRoom(userId: string, roomId: string) {
    return this.http.put(this.rootUrl + '/Room/Remove', {
      UserId: userId,
      RoomId: roomId
    });
  }
  getAllRooms(queryString: ComplexObjectFilterComponent,
    onSuccess,
    onFail) {
    const req = this.http.get(this.rootUrl + '/Rooms?' + queryString.complexObject());
    const promise = req.toPromise();

    promise.then(
      onSuccess,
      onFail
    );
  }

  getRooms(): Observable<Room[]> {
    console.log('getting rooms');
    return this.http.get<Room[]>(this.testUrl);
  }



  methodTestEx() {
    console.log('has been called');
  }
}
