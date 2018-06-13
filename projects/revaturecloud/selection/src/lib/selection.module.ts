import { NgModule } from '@angular/core';
import { SelectionComponent } from './selection.component';
import { HttpClientModule } from '@angular/common/http';
import { UserWrapperComponent } from './components/user-wrapper/user-wrapper.component';
import { SearchPipe } from './shared/search.pipe';
import { FilterService } from "./services/filter.service";


@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [
    SelectionComponent,
    UserWrapperComponent,
    SearchPipe
  ],
  providers: [FilterService],
  exports: [SelectionComponent]
})
export class SelectionModule { }
