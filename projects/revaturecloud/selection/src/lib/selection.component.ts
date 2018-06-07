import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../public_api';

@Component({
  selector: 'lib-selection',
  template: `
    <p>
      selection works!
    </p>
  `,
  styles: []
})
export class SelectionComponent implements OnInit {

  constructor(private service: SelectionService) { }

  ngOnInit() {
    this.service.methodTestEx();
  }

}
