import { NgModule } from '@angular/core';
import { SelectionComponent } from './selection.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterService } from "./services/filter.service";
import { UserStore } from './stores/user.store';
@NgModule({
  imports: [
    HttpClientModule,
  ],
  declarations: [
    SelectionComponent
  ],
  providers: [
    FilterService,
    UserStore
             ],
  exports: [SelectionComponent]
})
export class SelectionModule { }
