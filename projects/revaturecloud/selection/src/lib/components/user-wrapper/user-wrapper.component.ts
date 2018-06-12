import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-user-wrapper',
  templateUrl: './user-wrapper.component.html',
  styleUrls: ['./user-wrapper.component.css']
})
export class UserWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userName = '';
}
