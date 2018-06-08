import { NgModule } from '@angular/core';
import { SelectionComponent } from './selection.component';
import { ComplexObjectFilterComponent } from './complex-object-filter/complex-object-filter.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { mockrooms } from '../../../../../src/app/models/mock-rooms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    HttpClientModule,
  ],
  declarations: [
    SelectionComponent,
    ComplexObjectFilterComponent,
    mockrooms
  ],
  exports: [SelectionComponent]
})
export class SelectionModule { }
