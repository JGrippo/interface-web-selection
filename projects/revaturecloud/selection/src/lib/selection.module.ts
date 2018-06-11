import { NgModule } from '@angular/core';
import { SelectionComponent } from './selection.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    HttpClientModule,
  ],
  declarations: [
    SelectionComponent
  ],
  exports: [SelectionComponent]
})
export class SelectionModule { }
