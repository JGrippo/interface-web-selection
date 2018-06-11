import { NgModule } from '@angular/core';
import { SelectionComponent } from './selection.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterService } from "./services/filter.service";
@NgModule({
  imports: [
    HttpClientModule,
  ],
  declarations: [
    SelectionComponent
  ],
  providers: [FilterService],
  exports: [SelectionComponent]
})
export class SelectionModule { }
