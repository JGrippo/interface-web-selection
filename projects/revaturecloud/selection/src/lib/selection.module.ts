import { NgModule } from '@angular/core';
import { SelectionComponent } from './selection.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPanelComponent } from "./components/filter-panel/filter-panel.component";
import { FilterService } from "./services/filter.service";
@NgModule({
  imports: [
    HttpClientModule,
  ],
  declarations: [
    SelectionComponent,
    FilterPanelComponent,
  ],
  providers: [FilterService],
  exports: [SelectionComponent]
})
export class SelectionModule { }
