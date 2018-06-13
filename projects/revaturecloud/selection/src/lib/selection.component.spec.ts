import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionComponent } from './selection.component';
import { SelectionService } from './services/selection.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from "./models/user.model";
import { Name } from "./models/name.model";
import { Room } from './models/room.model';
import { Address } from './models/address.model';
import { Observable, of } from 'rxjs';
import { Input } from '@angular/core';
import { By } from 'protractor';
import { RoomAssociation } from './models/roomAssociation.model';
import { SearchParameters } from './models/searchParameters.model';

describe('SelectionComponent', () => {
  let component: SelectionComponent;
  let componentwith: SelectionComponent;
  let fixture: ComponentFixture<SelectionComponent>;
  let Rooms;
  let mockService;
  let roomAssociations;
  let users;
  let searchParameters: SearchParameters;


  beforeEach(() => {

    let roomAssociations: RoomAssociation[] = [
      {
        userId: '1',
        roomId: 'guid1'
      }
    ];

    let searchParameters: SearchParameters = {
      batch: 'test',
      batchMinimumPercentage: 2,
      gender: 'm',
      isCompletelyUnassigned: true
    };

    const testAddress1: Address = {
      address1: 'Street1',
      address2: '314',
      city: 'Tampa',
      state: 'FL',
      postalCode: '33612',
      country: 'USA'
    };

    const testAddress2: Address = {
      address1: 'Street',
      address2: '315',
      city: 'Tampa',
      state: 'FL',
      postalCode: '33612',
      country: 'USA'
    };

    let Rooms: Room[] = [
      {
        roomId: 'guid1',
        location: 'Tampa',
        vacancy: 4,
        occupancy: 4,
        gender: 'm',
        address: testAddress1,
      },
      {
        roomId: 'guid2',
        location: 'Tampa',
        vacancy: 1,
        occupancy: 4,
        gender: 'f',
        address: testAddress2,
      }
    ];

    let users: User[] = [
      {
        id: '1',
        location: 'test',
        email: 'test@test.com',
        gender: 'm',
        type: 'test',
        batch: null,
        room: Rooms[0],
        name: {
          id: "1",
          first: "fname",
          middle: "mname",
          last: "lname",
        },
        address: testAddress1
      }
    ];

    /**
     * creates testing service with desired methods. and places a spy on them
     */
    mockService = jasmine.createSpyObj(
      ['getAllRooms', 'addUserToRoom', 'getAllUsers', 'removeUserFromRoom',
        'getComplexRequestOfRooms', 'getAllUnassignedUsers']
    );

    TestBed.configureTestingModule({
      declarations: [
        SelectionComponent
      ],
      providers: [
        { provide: SelectionService, useValue: mockService }
      ]
    });

    fixture = TestBed.createComponent(SelectionComponent);
    componentwith = new SelectionComponent(mockService);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit on initialization', () => {
    const spy = spyOn(component, 'ngOnInit');

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should call getRooms on call', () => {
    const service = TestBed.get(SelectionService);
    const spy = spyOn(component, 'getAllRoomsComp');

    component.getAllRoomsComp();

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should get all rooms', () => {
    mockService.getAllRooms.and.returnValue(of(Rooms));

    componentwith.getAllRoomsComp();

    expect(componentwith.rooms.length).toBe(2);
  });

  it('should get all users', () => {
    mockService.getAllUsers.and.returnValue(of(users));

    componentwith.getAllUsersComp();

    expect(componentwith.users.length).toBe(1);
  });

  it('should call SelectionService.addUserToRoom with param when component addUserToRoom is called',
    () => {
      mockService.addUserToRoom.and.returnValue(of(roomAssociations));

      componentwith.addUserToRoomComp(roomAssociations[0]);

      expect(mockService.addUserToRoom).toHaveBeenCalledWith(roomAssociations[0]);

    });

  it('should call SelectionService.removeUserFromRoom with param when component removeUserFromRoomComp is called',
    () => {
      mockService.removeUserFromRoom.and.returnValue(of(roomAssociations));

      componentwith.removeUserFromRoomComp(roomAssociations[0]);

      expect(mockService.removeUserFromRoom).toHaveBeenCalledWith(roomAssociations[0]);
    });

  it('should get rooms of Complex Request', () => {
    mockService.getComplexRequestOfRooms.and.returnValue(of(Rooms));

    componentwith.getComplexRequestOfRoomsComp(searchParameters);

    expect(mockService.getComplexRequestOfRooms).toHaveBeenCalledWith(searchParameters);
    expect(componentwith.rooms.length).toBe(2);
  });

  it('should get all unassigned users ', () => {
    mockService.getAllUnassignedUsers.and.returnValue(of(users));

    componentwith.getAllUnassignedUsersComp();

    expect(componentwith.users.length).toBe(1);
  });
});
