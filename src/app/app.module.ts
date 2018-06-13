import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserWrapperComponent } from '../../projects/revaturecloud/selection/src/lib/components/user-wrapper/user-wrapper.component';
import { SearchPipe } from '../../projects/revaturecloud/selection/src/lib/shared/search.pipe';
import { SelectionModule } from "../../projects/revaturecloud/selection/src/lib/selection.module";
// test

import {MatPaginatorModule} from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { UserCardComponent } from 'projects/revaturecloud/selection/src/lib/components/user-card/user-card.component';
import { SelectionComponent } from 'projects/revaturecloud/selection/src/public_api';

@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    UserWrapperComponent,
    SearchPipe,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatCardModule,
    MatGridListModule,
    SelectionModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
