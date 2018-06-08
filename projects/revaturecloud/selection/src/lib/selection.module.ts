import { NgModule } from '@angular/core';
import { SelectionComponent } from './selection.component';
import { HttpClientModule } from '@angular/common/http';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [SelectionComponent],
  exports: [SelectionComponent]
})
export class SelectionModule { }
