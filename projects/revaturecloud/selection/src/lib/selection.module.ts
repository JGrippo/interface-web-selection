import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectionComponent } from './selection.component';
import { HttpClientModule } from '@angular/common/http';
import { UserWrapperComponent } from './components/user-wrapper/user-wrapper.component';
import { SearchPipe } from './shared/search.pipe';
import { FilterPanelComponent } from "./components/filter-panel/filter-panel.component";
import { FilterService } from "./services/filter.service";
import { UserStore } from './stores/user.store';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { UserCardComponent } from './components/user-card/user-card.component';
import { RoomStore } from './stores/room.store';


@NgModule({
  imports: [
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [
    SelectionComponent,
    UserWrapperComponent,
    SearchPipe,
    UserCardComponent,
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
