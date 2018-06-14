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
import { BrowserModule } from '@angular/platform-browser';
import { SelectionService } from './services/selection.service';
import { MatPaginatorModule, MatTableDataSource, MatCardModule, MatTableModule, MatInputModule, MatSortModule, MatCard } from '@angular/material';
import { MatGridListModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatGridListModule,
    HttpModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    SelectionComponent,
    FilterPanelComponent,
    RoomWrapperComponent,
    RoomCardComponent,
    RoomSearchPipe
  ],
  providers: [
    FilterService,
    UserStore,
    RoomStore
             ],
  exports: [SelectionComponent]
})
export class SelectionModule { }
