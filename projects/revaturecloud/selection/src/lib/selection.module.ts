import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectionComponent } from './selection.component';
import { HttpClientModule } from '@angular/common/http';
import { RoomWrapperComponent, RoomSearchPipe } from './components/room-wrapper/room-wrapper.component';
import { FilterPanelComponent } from "./components/filter-panel/filter-panel.component";
import { FilterService } from "./services/filter.service";
import { RoomCardComponent } from './components/room-card/room-card.component';
import { UserStore } from './stores/user.store';
import { RoomStore } from './stores/room.store';
@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    SelectionComponent,
    FilterPanelComponent
  ],
  providers: [
    FilterService,
    UserStore,
    RoomStore
             ],
  exports: [SelectionComponent]
})
export class SelectionModule { }
