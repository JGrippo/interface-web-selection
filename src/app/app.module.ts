import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectionComponent } from '../../projects/revaturecloud/selection/src/lib/selection.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectionService } from '../../projects/revaturecloud/selection/src/lib/services/selection.service';
import { RoomWrapperComponent } from '../../projects/revaturecloud/selection/src/lib/components/room-wrapper/room-wrapper.component';
import { MatPaginatorModule, MatTableDataSource, MatCardModule, MatTableModule, MatInputModule, MatSortModule, MatCard } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomCardComponent } from '../../projects/revaturecloud/selection/src/lib/components/room-card/room-card.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
// test

@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    RoomWrapperComponent,
    RoomCardComponent,
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
    MatCardModule
  ],
  providers: [SelectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
