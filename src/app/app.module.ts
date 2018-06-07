import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectionComponent } from '../../projects/revaturecloud/selection/src/lib/selection.component';
import { ComplexObjectFilterComponent } from '../../projects/revaturecloud/selection/src/lib/complex-object-filter/complex-object-filter.component';
// test

@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    ComplexObjectFilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
