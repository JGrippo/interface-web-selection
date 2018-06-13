import { NgModule } from '@angular/core';
import { SelectionComponent } from './selection.component';
import { HttpClientModule } from '@angular/common/http';
import { UserWrapperComponent } from './components/user-wrapper/user-wrapper.component';
import { SearchPipe } from './shared/search.pipe';
import { FilterService } from "./services/filter.service";


import { UserStore } from './stores/user.store';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: [
    SelectionComponent,
    UserWrapperComponent,
    SearchPipe
  ],
  providers: [
    FilterService,
    UserStore
             ],
  exports: [SelectionComponent]
})
export class SelectionModule { }
