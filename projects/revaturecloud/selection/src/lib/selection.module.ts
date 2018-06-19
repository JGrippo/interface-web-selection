import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { FilterService } from './services/filter.service';
import { PutService } from './services/put.service';
import { RoomCardComponent } from './components/room-card/room-card.component';
import { UserStore } from './stores/user.store';
import { RoomStore } from './stores/room.store';
import { BatchStore } from './stores/batch.store';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule} from 'ngx-pagination';
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
  MatRadioModule,
  MatSortModule,
  MatTabsModule
  } from '@angular/material';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { UserWrapperComponent } from './components/user-wrapper/user-wrapper.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ChangeStore } from './stores/change.store';
import { RoomWrapperComponent } from './components/room-wrapper/room-wrapper.component';
import { SelectionComponent } from './selection.component';
import { SearchPipe } from './shared/search.pipe';
import { RoomSearchPipe } from './shared/roomsearch.pipe';
import { TableViewComponent } from './components/table-view/table-view.component';

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
    RoomSearchPipe,
    TableViewComponent
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
    MatTabsModule,
    NgxPaginationModule,
    MatIconModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatRadioModule
  ],
  providers: [
    FilterService,
    UserStore,
    RoomStore,
    BatchStore,
    PutService,
    ChangeStore
  ],
  exports: [
    SelectionComponent,
    UserWrapperComponent,
    RoomWrapperComponent,
    ContentWrapperComponent,
    TableViewComponent,
    UserCardComponent,
    RoomCardComponent,
    FilterPanelComponent
    ]
})
export class SelectionModule { }
