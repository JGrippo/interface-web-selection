import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../public_api';
import { Room } from './models/room.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-selection',
  template: '<p></p>',
  styles: []
})
export class SelectionComponent implements OnInit {
  rooms: Room[];

  constructor(private service: SelectionService) { }

  ngOnInit() {
  }


  /// <summary>
  ///     calls getAllRooms from service and sets component rooms to retrieved data\
  /// </summary>
  getRooms(): void {
    this.service.getAllRooms().subscribe((data: Room[]) =>
      this.rooms = data,
      (err: any) => console.log(err),
      () => console.log('Retrieved Rooms'));
  }

}
