// import {TestBed, ComponentFixture, async} from '@angular/core/testing';
// import {UserWrapperComponent} from './user-wrapper.component';
// import { UserStore } from '../../stores/user.store';
// import { of } from 'rxjs/internal/observable/of';
// import { By } from '@angular/platform-browser';
// import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { User } from '../../models/user.model';
// import { HttpClientModule } from '@angular/common/http';
// import { NgxPaginationModule } from 'ngx-pagination';
// import { SearchPipe } from '../../shared/search.pipe';

// fdescribe('Component: UserWrapperComponent', () => {
//   let comp:    UserWrapperComponent;
//   let fixture: ComponentFixture<UserWrapperComponent>;
//   let mockUserStoreService;
//   let allTempUsers: User[] = [];

//   beforeEach(async(() => {

//     allTempUsers = [
//       {
//         id: '10',
//         location: 'Reston',
//         email: "a@a.com",
//         gender: "male",
//         type: "Known",
//         name: {
//           id: "1000",
//           first: "Petty",
//           middle: "Meagan",
//           last: "Barber"
//         },
//         address: {
//           address1: "Fowler",
//           address2: "411",
//           city: "Reston",
//           state: "Virginia",
//           postalCode: "43417",
//           country: "USA"
//         }
//       },
//       {
//         id: "11",
//         location: "Tampa",
//         email: "b@b.com",
//         gender: "male",
//         type: "Unknown",
//         name: {
//           id: "1001",
//           first: "Bridget",
//           middle: "Erica",
//           last: "Padilla"
//         },
//         address: {
//           address1: "Fowler",
//           address2: "249",
//           city: "Tampa",
//           state: "Florida",
//           postalCode: "88080",
//           country: "USA"
//         }
//       },
//       {
//         id: "12",
//         location: "Tampa",
//         email: "c@c.com",
//         gender: "male",
//         type: "Unknown",
//         name: {
//           id: "1002",
//           first: "Mullins",
//           middle: "Maude",
//           last: "Wynn"
//         },
//         address: {
//           address1: "Livingston",
//           address2: "122",
//           city: "Tampa",
//           state: "Virginia",
//           postalCode: "92287",
//           country: "USA"
//         }
//       }
//     ];

//     mockUserStoreService = jasmine.createSpyObj(['users']);

//     TestBed.configureTestingModule({
//       declarations: [UserWrapperComponent],
//       imports: [HttpClientModule, NgxPaginationModule, SearchPipe],
//       providers: [{provide: UserStore, useValue: mockUserStoreService}],
//       schemas: [NO_ERRORS_SCHEMA]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(UserWrapperComponent);
//     comp = fixture.componentInstance;
//   });

//   it('should create the app', () => {
//     let app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   });

// });

