import { NgModule } from '@angular/core';
import { SelectionComponent } from './selection.component';
import { ComplexObjectFilterComponent } from './complex-object-filter/complex-object-filter.component';
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
