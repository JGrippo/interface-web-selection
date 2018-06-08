///
/// <summary>
///    class is used to format a created roomquery variable into a string
///  formatted to use as a query string
/// </summary>
///
import { Component, OnInit, Output, Input } from '@angular/core';
import { RoomSearchQuery } from '../models/roomSearchQueryModel';

@Component({
  selector: 'lib-complex-object-filter',
  templateUrl: './complex-object-filter.component.html',
  styleUrls: ['./complex-object-filter.component.css']
})
export class ComplexObjectFilterComponent implements OnInit {

  @Input()
  queryString: RoomSearchQuery;

  @Output()
  formatString: string;

  constructor() {
  }

  ngOnInit() {
  }


  ///
  /// <summary>
  ///    formates RoomSeachQuery to url query string
  /// </summary>
  ///
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
