import { CommonModule } from "@angular/common";
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectionComponent } from './selection.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPanelComponent } from "./components/filter-panel/filter-panel.component";
import { FilterService } from "./services/filter.service";
import { UserStore } from './stores/user.store';
import { RoomStore } from './stores/room.store';

import { UserWrapperComponent } from './components/user-wrapper/user-wrapper.component';
import { SearchPipe } from './shared/search.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { UserCardComponent } from './components/user-card/user-card.component';



@NgModule({
  declarations: [
    SelectionComponent,
    FilterPanelComponent,
    UserWrapperComponent,
    SearchPipe,
    UserCardComponent
  ],

  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule
  ],

  providers: [
    FilterService,
    UserStore,
    RoomStore
  ],
  exports: [SelectionComponent]
})
export class SelectionModule { }
