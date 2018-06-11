import { NgModule } from '@angular/core';
import { SelectionComponent } from './selection.component';
import { HttpClientModule } from '@angular/common/http';
import { UserWrapperComponent } from './components/user-wrapper/user-wrapper.component';
@NgModule({
  imports: [
    HttpClientModule,
  ],
  declarations: [
    SelectionComponent,
    UserWrapperComponent
  ],
  exports: [SelectionComponent]
})
export class SelectionModule { }
