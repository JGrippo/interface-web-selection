import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { SelectionComponent } from './selection.component';
import { HttpClientModule } from '@angular/common/http';
import { RoomWrapperComponent, RoomSearchPipe } from './components/room-wrapper/room-wrapper.component';
import { FilterPanelComponent } from "./components/filter-panel/filter-panel.component";
import { FilterService } from "./services/filter.service";
import { RoomCardComponent } from './components/room-card/room-card.component';
import { UserStore } from './stores/user.store';
import { RoomStore } from './stores/room.store';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule, MatCardModule, MatTableModule, MatInputModule, MatSortModule} from '@angular/material';
import { MatGridListModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { UserWrapperComponent } from './components/user-wrapper/user-wrapper.component';
import { SearchPipe } from './shared/search.pipe';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [
    SelectionComponent,
    FilterPanelComponent,
    UserWrapperComponent,
    SearchPipe,
    UserCardComponent,
    RoomWrapperComponent,
    RoomCardComponent,
    RoomSearchPipe
  ],

  imports: [
    HttpClientModule,
    HttpModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    RouterModule
  ],
  providers: [
    FilterService,
    UserStore,
    RoomStore
  ],
  exports: [SelectionComponent]
})
export class SelectionModule { }
