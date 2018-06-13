import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectionService } from '../../projects/revaturecloud/selection/src/lib/services/selection.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SelectionModule } from "../../projects/revaturecloud/selection/src/lib/selection.module";

import { FilterService } from "../../projects/revaturecloud/selection/src/lib/services/filter.service";
import { FilterSortService } from 'projects/revaturecloud/selection/src/lib/services/filter-sort.service';
// test

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule,
    SelectionModule
  ],
  bootstrap: [AppComponent],
  providers: [
    FilterService,
    FilterSortService,
  ]
})
export class AppModule { }
