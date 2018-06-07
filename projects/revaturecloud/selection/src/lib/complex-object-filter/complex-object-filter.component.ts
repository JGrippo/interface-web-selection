import { Component, OnInit, Output } from '@angular/core';
import { RoomSearchQuery } from '../models/roomSearchQueryModel';

@Component({
  selector: 'lib-complex-object-filter',
  templateUrl: './complex-object-filter.component.html',
  styleUrls: ['./complex-object-filter.component.css']
})
export class ComplexObjectFilterComponent implements OnInit {

  queryString: RoomSearchQuery;

  @Output()
  formatString: string;

  constructor(queryString: RoomSearchQuery) {

    this.queryString = queryString;
  }

  ngOnInit() {
  }



  complexObject() {

    this.formatString =
      'Location=' + this.queryString.Location
      + '&' +
      'Batch=' + this.queryString.Batch
      + '&' +
      'Gender=' + this.queryString.Gender
      + '&' +
      'IsCompletelyUnassigned=' + this.queryString.IsCompletelyUnassigned
      + '&' +
      'BatchMinimumPercentage=' + this.queryString.BatchMinimumPercentage;


  }
}
