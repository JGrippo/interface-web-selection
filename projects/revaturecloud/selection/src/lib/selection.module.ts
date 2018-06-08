import { NgModule } from '@angular/core';
import { SelectionComponent } from './selection.component';
import { ComplexObjectFilterComponent } from './complex-object-filter/complex-object-filter.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    HttpClientModule,
  ],
  declarations: [
    SelectionComponent,
    ComplexObjectFilterComponent
  ],
  exports: [SelectionComponent]
})
export class SelectionModule { }
