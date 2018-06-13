import { NgModule } from '@angular/core';
import { SelectionComponent } from './selection.component';
import { HttpClientModule } from '@angular/common/http';
import { RoomWrapperComponent } from './components/room-wrapper/room-wrapper.component';
import { FilterService } from "./services/filter.service";
import { RoomCardComponent } from './components/room-card/room-card.component';
import { UserStore } from './stores/user.store';
import { RoomStore } from './stores/room.store';
@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [
    SelectionComponent,
    RoomWrapperComponent,
    RoomCardComponent,
  ],
  providers: [
    FilterService,
    UserStore,
    RoomStore
             ],
  exports: [SelectionComponent]
})
export class SelectionModule { }
