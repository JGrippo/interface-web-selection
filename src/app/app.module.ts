import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SelectionModule } from "../../projects/revaturecloud/selection/src/lib/selection.module";

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
  bootstrap: [AppComponent]
})
export class AppModule { }
