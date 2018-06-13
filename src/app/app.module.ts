import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectionService } from '../../projects/revaturecloud/selection/src/lib/services/selection.service';
import { RoomWrapperComponent } from '../../projects/revaturecloud/selection/src/lib/components/room-wrapper/room-wrapper.component';
import { MatPaginatorModule, MatTableDataSource, MatCardModule, MatTableModule, MatInputModule, MatSortModule, MatCard } from '@angular/material';
import { MatGridListModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomCardComponent } from '../../projects/revaturecloud/selection/src/lib/components/room-card/room-card.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RoomSearchPipe } from '../../projects/revaturecloud/selection/src/lib/components/room-wrapper/room-wrapper.component';
import { SelectionModule } from "../../projects/revaturecloud/selection/src/lib/selection.module";
// test

@NgModule({
  declarations: [
    AppComponent,
    RoomWrapperComponent,
    RoomCardComponent,
    RoomSearchPipe
  ],
  imports: [
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
    SelectionModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
