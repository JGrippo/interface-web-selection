import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { SelectionService } from '../public_api';
import { SearchParameters } from './models/searchParameters.model';
import { UserModel } from './models/user.model';
import { RoomAssociation } from './models/roomAssociation.model';
import { Room } from './models/room.model';
import { Address } from './models/address.model';

describe('SelectionService Tests', () => {

  let selectionService: SelectionService;
  let httpTestingController: HttpTestingController;
  let testAddress1: Address = {
    Street: "Street",
    AptNum: "314",
    City: "Tampa",
    State: "FL",
    PostalCode: "33612",
    Country: "USA"
  };
  let testAddress2: Address = {
    Street: "Street",
    AptNum: "315",
    City: "Tampa",
    State: "FL",
    PostalCode: "33612",
    Country: "USA"
  };
  let testRooms: Room[] = [
    {
      RoomId: "guid1",
      Location: "Tampa",
      Address: testAddress1,
      Vacancy: 4,
      Occupancy: 4,
      Gender: "m"
    },
    {
      RoomId: "guid2",
      Location: "Tampa",
      Address: testAddress2,
      Vacancy: 1,
      Occupancy: 4,
      Gender: "f"
    }
  ];
  let testUsers: UserModel[] = [
    {
      Id: '1',
      Location: 'Here',
      Address: {
        Street: 'Angular Main Rd',
        AptNum: '3',
        City: 'Tampa',
        State: 'Florida',
        PostalCode: '98798',
        Country: 'USA'
      },
      Email: 'email@gmail.com',
      Name: {
        First: 'You',
        Middle: 'o',
        Last: 'Kot'
      },
      Gender: 'F',
      Type: 'Unknown'
    },
    {
      Id: '2',
      Location: 'There',
      Address: {
        Street: 'C# Main Rd',
        AptNum: '31',
        City: 'Tampa',
        State: 'Florida',
        PostalCode: '98798',
        Country: 'USA'
      },
      Email: 'email@yahoo.com',
      Name: {
        First: 'Me',
        Middle: 'o',
        Last: 'Ko'
      },
      Gender: 'M',
      Type: 'Known'
    },
    {
      Id: '3',
      Location: 'Nowhere',
      Address: {
        Street: 'Dotnet Main St',
        AptNum: '314',
        City: 'Tampa',
        State: 'Florida',
        PostalCode: '98790',
        Country: 'USA'
      },
      Email: 'email@revature.com',
      Name: {
        First: 'Who',
        Middle: 'o',
        Last: 'K'
      },
      Gender: 'F',
      Type: 'Unknown'
    }
  ]
;
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SelectionService]
    });

    selectionService = TestBed.get(SelectionService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should GET all rooms', () => {
    selectionService.getAllRooms()
      .subscribe((data: Room[]) => {
        expect(data.length).toBe(2);
      });

    let roomsRequest: TestRequest = httpTestingController.expectOne(selectionService.rootUrl + selectionService.apiEpRooms);
    expect(roomsRequest.request.method).toEqual('GET');

    roomsRequest.flush(testRooms);
  });

  it('should GET all users', () => {
    selectionService.getAllUsers()
      .subscribe((data: UserModel[]) => {
        expect(data.length).toBe(3);
      });

    let usersRequest: TestRequest = httpTestingController.expectOne(selectionService.rootUrl + selectionService.apiEpUsers);
    expect(usersRequest.request.method).toEqual('GET');

    usersRequest.flush(testUsers);
  });

  it('should GET all users', () => {
    selectionService.getAllUnassignedUsers()
      .subscribe((data: UserModel[]) => {
        expect(data.length).toBe(3);
      });

    let usersRequest: TestRequest = httpTestingController.expectOne(selectionService.rootUrl + selectionService.apiEpUnassignedUsers);
    expect(usersRequest.request.method).toEqual('GET');

    usersRequest.flush(testUsers);
  });
});
