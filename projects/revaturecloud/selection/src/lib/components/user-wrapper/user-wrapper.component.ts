import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';
import { UserStore } from '../../stores/user.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-user-wrapper',
  templateUrl: './user-wrapper.component.html',
  styleUrls: ['./user-wrapper.component.css']
})
export class UserWrapperComponent implements OnInit {

  allUsers:[User];

  // constructor(private selectionService: SelectionService) { }
  constructor(private userStoreService: UserStore) { }

  ngOnInit() {
    this.userStoreService.users.subscribe((data: any) => {
      this.allUsers = data;
    });
  }

  userName = '';
}
