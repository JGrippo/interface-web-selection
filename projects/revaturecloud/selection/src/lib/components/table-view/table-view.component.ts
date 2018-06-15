import { Component, OnInit } from '@angular/core';
import { ChangeStore } from '../../stores/change.store';
import { MatTableDataSource } from '@angular/material';
import { Tracker } from '../../models/tracker.model';

@Component({
  selector: 'lib-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  constructor(private changeStore: ChangeStore) { }
  displayedColumns = ['User', 'Room', 'Action'];
  dataSource: MatTableDataSource<Tracker>;

  ngOnInit() {
    this.changeStore.changes$.subscribe(changes => this.dataSource = new MatTableDataSource(changes));
  }

}
