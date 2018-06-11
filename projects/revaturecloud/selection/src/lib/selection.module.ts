import { NgModule } from '@angular/core';
import { SelectionComponent } from './selection.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPanelComponent } from "./components/filter-panel/filter-panel.component";
@NgModule({
  imports: [
    HttpClientModule,
  ],
  declarations: [
    SelectionComponent,
    FilterPanelComponent,
  ],
  exports: [SelectionComponent]
})
export class SelectionModule { }
