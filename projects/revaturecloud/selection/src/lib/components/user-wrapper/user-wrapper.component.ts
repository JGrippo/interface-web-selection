import { Component, OnInit } from '@angular/core';
import { SelectionService } from 'projects/revaturecloud/selection/src/lib/selection.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'lib-user-wrapper',
  templateUrl: './user-wrapper.component.html',
  styleUrls: ['./user-wrapper.component.css']
})
export class UserWrapperComponent implements OnInit {

  allUsers: [User];

  constructor(private selectionService: SelectionService) { }

  ngOnInit() {
    this.selectionService.getAllUsers().subscribe((data: any) => {
      this.allUsers = data;
    });
  }

  userName = '';
}
