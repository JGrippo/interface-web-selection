import { NgModule } from '@angular/core';
import { SelectionComponent } from './selection.component';
import { HttpClientModule } from '@angular/common/http';
import { Batch } from './batch.wrapper.component/batch.wrapper.component.component';
@NgModule({
  imports: [
    HttpClientModule,
  ],
  declarations: [
    SelectionComponent,
    Batch.Wrapper.ComponentComponent
  ],
  exports: [SelectionComponent]
})
export class SelectionModule { }
