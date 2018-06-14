import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

import {
  MatButtonModule,
  MatInputModule,
  MatSidenavModule,
  MatPaginatorModule,
  MatGridListModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatDividerModule,
  MatIconModule,
  MatExpansionModule,
  MatTableModule,
  MatSortModule
  } from '@angular/material';

import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { UserWrapperComponent } from './components/user-wrapper/user-wrapper.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { SelectionComponent } from './selection.component';
import { SearchPipe } from './shared/search.pipe';
import { RoomWrapperComponent, RoomSearchPipe } from './components/room-wrapper/room-wrapper.component';
import { FilterPanelComponent } from "./components/filter-panel/filter-panel.component";
import { RoomCardComponent } from './components/room-card/room-card.component';
import { FilterService } from "./services/filter.service";
import { UserStore } from './stores/user.store';
import { RoomStore } from './stores/room.store';

@NgModule({
  declarations: [
    SelectionComponent,
    FilterPanelComponent,
    UserWrapperComponent,
    ContentWrapperComponent,
    SearchPipe,
    UserCardComponent,
    RoomWrapperComponent,
    RoomCardComponent,
    RoomSearchPipe
  ],

  imports: [
    HttpClientModule,
    HttpModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    MatTableModule,
    MatSortModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonModule,
    NgxPaginationModule,
    MatIconModule,
    MatExpansionModule,
    BrowserAnimationsModule,
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
