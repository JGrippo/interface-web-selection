import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectionComponent } from './selection.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { FilterService } from './services/filter.service';
import { PutService } from "./services/put.service";
import { UserStore } from './stores/user.store';
import { RoomStore } from './stores/room.store';
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
  providers: [
    FilterService,
    UserStore,
    RoomStore,
    PutService,
  ],
  exports: [SelectionComponent]
})
export class SelectionModule { }
