import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  constructor() { }

  methodTestEx() {
    console.log('has been called');
  }
}
