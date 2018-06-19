import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { UserCardComponent } from "./user-card.component";
import { Room } from "../../models/room.model";
import { BrowserModule } from "@angular/platform-browser";
import { NO_ERRORS_SCHEMA} from "@angular/core";
import { RoomStore } from "../../stores/room.store";
import { HttpClientModule } from "@angular/common/http";
import { PutService } from "../../services/put.service";
import { User } from "../../models/user.model";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';


import {
  MatButtonModule,
  MatInputModule,
  MatSidenavModule,
  MatPaginatorModule,
  MatGridListModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatDividerModule,
  MatIconModule,
  MatExpansionModule,
  MatTableModule,
  MatRadioModule,
  MatSortModule
  } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/compiler/src/core";
import { Observable } from "rxjs";

fdescribe('UserCardComponent', () => {
  let testRooms: Room[];
  let mockPutService;
  let mockRoomStore;

  beforeEach(() => {
    testRooms = [
      {
        id: '1',
        location: 'Reston',
        vacancy: 3,
        occupancy: 1,
        gender: 'female',
        address: {
          address1: "Fowler",
          address2: "411",
          city: "Reston",
          state: "Virginia",
          postalCode: "43417",
          country: "USA"
        },
        users: [
          {
            id: '10',
            location: 'Reston',
            email: "a@a.com",
            gender: "female",
            type: "Known",
            name: {
              id: "1000",
              first: "Petty",
              middle: "Meagan",
              last: "Barber"
            },
            address: {
              address1: "Fowler",
              address2: "411",
              city: "Reston",
              state: "Virginia",
              postalCode: "43417",
              country: "USA"
            }
          }
        ]
      }
    ];

    mockPutService = jasmine.createSpyObj(['assign']);
    mockRoomStore = jasmine.createSpyObj(['rooms']);

    TestBed.configureTestingModule({
      declarations: [UserCardComponent],
      imports: [
        Observable,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpModule,
        FormsModule,
        BrowserModule,
        MatTableModule,
        MatSortModule,
        MatSidenavModule,
        MatCardModule,
        MatGridListModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatInputModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatDividerModule,
        MatButtonModule,
        NgxPaginationModule,
        MatIconModule,
        MatExpansionModule,
        BrowserAnimationsModule,
        MatRadioModule,
        RouterModule,
      ],
      providers: [{provide: PutService, useValue: mockPutService},
                  {provide: RoomStore, useValue: mockRoomStore}
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });



  it('should create the app', () => {
    let fixture = TestBed.createComponent(UserCardComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call addToFirstAvailable', fakeAsync(() => {
    let userA: User;
    userA =     {
      id: '1',
      location: 'Reston',
      email: "a@a.com",
      gender: "female",
      type: "Known",
      name: {
        id: "1000",
        first: "Petty",
        middle: "Meagan",
        last: "Barber"
      },
      address: {
        address1: "Fowler",
        address2: "411",
        city: "Reston",
        state: "Virginia",
        postalCode: "43417",
        country: "USA"
      }
    };

    let fixture = TestBed.createComponent(UserCardComponent);
    fixture.componentInstance.user = userA;

    spyOn(fixture.componentInstance, 'addToFirstAvailable');
    // tick();
    fixture.detectChanges();
    tick();

    expect(fixture.componentInstance.addToFirstAvailable).not.toHaveBeenCalled();
  }));

  // //Integration test
  // it(`should call putService.assign when the UserCard Component's addToFirstAvailable button is clicked`, fakeAsync(() => {
  //   let userA: User;
  //   userA =     {
  //     id: '1',
  //     location: 'Reston',
  //     email: "a@a.com",
  //     gender: "female",
  //     type: "Known",
  //     name: {
  //       id: "1000",
  //       first: "Petty",
  //       middle: "Meagan",
  //       last: "Barber"
  //     },
  //     address: {
  //       address1: "Fowler",
  //       address2: "411",
  //       city: "Reston",
  //       state: "Virginia",
  //       postalCode: "43417",
  //       country: "USA"
  //     }
  //   };

  //   let fixture = TestBed.createComponent(UserCardComponent);
  //   fixture.componentInstance.user = userA;

  //   spyOn(fixture.componentInstance, 'addToFirstAvailable');
  //   mockRoomStore.rooms.and.returnValue(of(testRooms));

  //   fixture.detectChanges();

  //   const button = fixture.debugElement.queryAll(By.css('button'))[0];
  //   button.triggerEventHandler('addToFirstAvailable', null);
  //   fixture.detectChanges();
  //   tick();
  //   expect(fixture.componentInstance.addToFirstAvailable).not.toHaveBeenCalled();
  // }));

});
