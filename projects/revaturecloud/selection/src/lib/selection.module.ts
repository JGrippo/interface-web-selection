import { NgModule } from '@angular/core';
import { SelectionComponent } from './selection.component';
import { ComplexObjectFilterComponent } from './complex-object-filter/complex-object-filter.component';

@NgModule({
  imports: [
  ],
  declarations: [SelectionComponent, ComplexObjectFilterComponent],
  exports: [SelectionComponent]
})
export class SelectionModule { }
