import { NgModule } from '@angular/core';
import { SelectionComponent } from './selection.component';
import { HttpClientModule } from '@angular/common/http';
import { RoomWrapperComponent } from './components/room-wrapper/room-wrapper.component';
@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [
    SelectionComponent,
    RoomWrapperComponent
  ],
  exports: [SelectionComponent]
})
export class SelectionModule { }
