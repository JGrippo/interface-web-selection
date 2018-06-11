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
  let testaddress1: Address = {
    street: "street",
    aptNum: "314",
    city: "Tampa",
    state: "FL",
    postalCode: "33612",
    country: "USA"
  };
  let testaddress2: Address = {
    street: "street",
    aptNum: "315",
    city: "Tampa",
    state: "FL",
    postalCode: "33612",
    country: "USA"
  };
  let testRooms: Room[] = [
    {
      roomId: "guid1",
      location: "Tampa",
      address: testaddress1,
      vacancy: 4,
      occupancy: 4,
      gender: "m"
    },
    {
      roomId: "guid2",
      location: "Tampa",
      address: testaddress2,
      vacancy: 1,
      occupancy: 4,
      gender: "f"
    }
  ];
  let testUsers: UserModel[] = [
    {
      id: '1',
      location: 'Here',
      address: {
        street: 'Angular Main Rd',
        aptNum: '3',
        city: 'Tampa',
        state: 'Florida',
        postalCode: '98798',
        country: 'USA'
      },
      email: 'email@gmail.com',
      name: {
        first: 'You',
        middle: 'o',
        last: 'Kot'
      },
      gender: 'F',
      type: 'Unknown'
    },
    {
      id: '2',
      location: 'There',
      address: {
        street: 'C# Main Rd',
        aptNum: '31',
        city: 'Tampa',
        state: 'Florida',
        postalCode: '98798',
        country: 'USA'
      },
      email: 'email@yahoo.com',
      name: {
        first: 'Me',
        middle: 'o',
        last: 'Ko'
      },
      gender: 'M',
      type: 'Known'
    },
    {
      id: '3',
      location: 'Nowhere',
      address: {
        street: 'Dotnet Main St',
        aptNum: '314',
        city: 'Tampa',
        state: 'Florida',
        postalCode: '98790',
        country: 'USA'
      },
      email: 'email@revature.com',
      name: {
        first: 'Who',
        middle: 'o',
        last: 'K'
      },
      gender: 'F',
      type: 'Unknown'
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
