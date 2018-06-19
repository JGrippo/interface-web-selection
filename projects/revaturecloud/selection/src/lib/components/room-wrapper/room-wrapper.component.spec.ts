import { TestBed, async } from '@angular/core/testing';
import { RoomWrapperComponent } from '../room-wrapper/room-wrapper.component';
import { RoomCardComponent } from '../room-card/room-card.component';
import { RoomSearchPipe } from '../../shared/roomsearch.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule} from 'ngx-pagination';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  MatInputModule,
  MatGridListModule,
  MatCardModule,
  MatFormFieldModule,
  MatDividerModule,
  MatIconModule,
  } from '@angular/material';
fdescribe('RoomWrapperComponent', () => {
  let fixture;
  let comp;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RoomWrapperComponent,
        RoomCardComponent,
        RoomSearchPipe
      ],
      imports: [
        MatGridListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        NgxPaginationModule,
        MatIconModule,
        MatDividerModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(RoomWrapperComponent);
    comp = fixture.debugElement.componentInstance;
  }));
  it('should create the component', async(() => {
    expect(comp).toBeTruthy;
  }));
  // it('should fill rooms on create', async(() => {
  //   expect(comp.rooms.length).toBeGreaterThan(0);
  // }))
});
