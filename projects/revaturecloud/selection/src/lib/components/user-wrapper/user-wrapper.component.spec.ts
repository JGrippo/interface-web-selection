import {TestBed, ComponentFixture} from '@angular/core/testing';
import {UserWrapperComponent} from './user-wrapper.component';
import { UserStore } from '../../stores/user.store';
import { of } from 'rxjs/internal/observable/of';
import { By } from '@angular/platform-browser';

describe('Component: UserWrapperComponent', () => {
  let fixture: ComponentFixture<UserWrapperComponent>;
  let mockUserStoreService;
  let allTempUsers;

  beforeEach(() => {

    allTempUsers = [
      {
        id: '10',
        location: 'Reston',
        email: "a@a.com",
        gender: "male",
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
      },
      {
        id: "11",
        location: "Tampa",
        email: "b@b.com",
        gender: "male",
        type: "Unknown",
        name: {
          id: "1001",
          first: "Bridget",
          middle: "Erica",
          last: "Padilla"
        },
        address: {
          address1: "Fowler",
          address2: "249",
          city: "Tampa",
          state: "Florida",
          postalCode: "88080",
          country: "USA"
        }
      },
      {
        id: "12",
        location: "Tampa",
        email: "c@c.com",
        gender: "male",
        type: "Unknown",
        name: {
          id: "1002",
          first: "Mullins",
          middle: "Maude",
          last: "Wynn"
        },
        address: {
          address1: "Livingston",
          address2: "122",
          city: "Tampa",
          state: "Virginia",
          postalCode: "92287",
          country: "USA"
        }
      }
    ];

    mockUserStoreService = jasmine.createSpyObj(['users']);

    TestBed.configureTestingModule({
      declarations: [UserWrapperComponent],
      providers: [{provide: UserStore, useValue: mockUserStoreService}]
    });

    fixture = TestBed.createComponent(UserWrapperComponent);
  });

  it('should create the app', () => {
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create each user as a UserWrapperComponent', () => {
    mockUserStoreService.users.and.returnValue(of(allTempUsers));

    //run ngOnInit
    fixture.detectChanges();

    const userComponents = fixture.debugElement.queryAll(By.directive(UserWrapperComponent));
    expect(userComponents.length).toEqual(3);
    for(let i = 0; i < userComponents.length; i++){
      expect(userComponents[i].componentInstance.user).toEqual(allTempUsers[i]);
    }
  });
});

