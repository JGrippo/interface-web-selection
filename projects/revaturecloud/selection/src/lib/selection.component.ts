import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../public_api';
import { mockrooms } from '../../../../../src/app/models/mock-rooms';
import { Room } from './models/room';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-selection',
  templateUrl: './selection.component.html',
  styles: []
})
export class SelectionComponent implements OnInit {
  rooms: Room[];

  constructor(private service: SelectionService) { }

  ngOnInit() {
    // this.service.methodTestEx();
  }

  getRooms(): void {
    this.service.getRooms().subscribe((data: any[]) => {
      console.log(data);
    });
  }

}
