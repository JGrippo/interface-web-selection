import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectionComponent } from '../../projects/revaturecloud/selection/src/lib/selection.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectionService } from '../../projects/revaturecloud/selection/src/lib/services/selection.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserWrapperComponent } from '../../projects/revaturecloud/selection/src/lib/components/user-wrapper/user-wrapper.component';
import { SearchPipe } from '../../projects/revaturecloud/selection/src/lib/shared/search.pipe';
// test

@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    UserWrapperComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule,

  ],
  providers: [SelectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
