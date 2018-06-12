import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectionComponent } from './selection.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPanelComponent } from "./components/filter-panel/filter-panel.component";
import { FilterService } from "./services/filter.service";
@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [
    SelectionComponent,
    FilterPanelComponent,
  ],
  providers: [FilterService],
  exports: [SelectionComponent]
})
export class SelectionModule { }
