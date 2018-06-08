import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectionComponent } from '../../projects/revaturecloud/selection/src/lib/selection.component';
import { ComplexObjectFilterComponent } from '../../projects/revaturecloud/selection/src/lib/complex-object-filter/complex-object-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { mockrooms } from './models/mock-rooms';
import { SelectionService } from '../../projects/revaturecloud/selection/src/lib/selection.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
// test

@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    ComplexObjectFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    HttpClientInMemoryWebApiModule.forRoot(
      mockrooms, { dataEncapsulation: false }
    ),
    RouterModule
  ],
  providers: [SelectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
