import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { FilterPanelComponent } from './filter-panel.component';
import { FilterService } from '../../services/filter.service';
import { FilterSortService } from '../../services/filter-sort.service';
import { PutService } from '../../services/put.service';
import { UserStore } from '../../stores/user.store';
import { RoomStore } from '../../stores/room.store';
import { BatchStore } from '../../stores/batch.store';
import { LocationStore } from '../../stores/location.store';
import { ChangeStore } from '../../stores/change.store';
import { SearchParameters } from '../../models/searchParameters.model';
import { SortParameters } from '../../models/sortParameters.model';
import { Batch } from '../../models/batch.model';
import { Room } from '../../models/room.model';

class MockUserStore {
  updateUsers(): void {}
}
class MockRoomStore {
  updateRooms(): void {}
  get rooms(): Observable<Room[]> {
    return new BehaviorSubject<Room[]>([]).asObservable();
  }
}
class MockBatchStore {
  updateBatches(): void {}
  get batches(): Observable<Batch[]> {
    return new BehaviorSubject<Batch[]>([]).asObservable();
  }
}
class MockLocationStore {
  get locations(): Observable<Room[]> {
    return new BehaviorSubject<Room[]>([]).asObservable();
  }
}
class MockFilterService {
  setFilter(params: SearchParameters): void {}
}
class MockFilterSortService {
  setFilter(params: SortParameters): void {}
}

describe('FilterPanelComponent', () => {
  let component: FilterPanelComponent;
  let fixture: ComponentFixture<FilterPanelComponent>;
  // let mockFilSer;
  // let mockFilSorSer;
  // let mockUserStore;
  // let mockRoomStore;
  // let mockBatchStore;
  // let mockLocStore;
  let filSer: FilterService;
  let filSorSer: FilterSortService;
  let userStore: UserStore;
  let roomStore: RoomStore;
  let batchStore: BatchStore;
  let locStore: LocationStore;

  beforeEach(async(() => {
    // let mockFilSer = jasmine.createSpyObj('FilterService', ['setFilter']);
    // let mockFilSorSer = jasmine.createSpyObj('FilterSortService', ['setFilter']);
    // let mockUserStore = jasmine.createSpyObj('UserStore', ['updateUsers']);
    // let mockRoomStore = jasmine.createSpyObj('RoomStore', ['updateRooms']);
    // let mockBatchStore = jasmine.createSpyObj('BatchStore', ['updateBatches', 'batches']);
    // let mockLocStore = jasmine.createSpyObj('LocationStore', ['locations']);
    // filSer = new FilterService();
    // filSorSer = new FilterSortService();
    // userStore = new UserStore();

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        HttpModule,
        CommonModule,
      ],
      declarations: [ FilterPanelComponent ],
      providers: [
        {provide: FilterService, useClass: MockFilterService},
        {provide: FilterSortService, useClass: MockFilterSortService},
        {provide: UserStore, useClass: MockUserStore},
        {provide: RoomStore, useClass: MockRoomStore},
        {provide: BatchStore, useClass: MockBatchStore},
        {provide: LocationStore, useClass: MockLocationStore}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign values to filter', () => {
    let expectedBatchId = "batchId";
    let expectedLocation = "Location";
    let expectedGender = "male";
    let expectedVRO = true;
    let expectedHBA = true;
    let expectedAssigned = true;

    component.batchId = expectedBatchId;
    component.location = expectedLocation;
    component.gender = expectedGender;
    component.vacantRoomsOnly = expectedVRO;
    component.hasBedAvailable = expectedHBA;
    component.housingSituation = expectedAssigned;

    component.AssignValuesToFilter();

    expect(component.filter.batch).toBe(expectedBatchId);
    expect(component.filter.location).toBe(expectedLocation);
    expect(component.filter.gender).toBe(expectedGender);
    expect(component.filter.isCompletelyUnassigned).toBe(expectedVRO);
    expect(component.filter.hasBedAvailable).toBe(expectedHBA);
    expect(component.filter.assigned).toBe(expectedAssigned);
  });

  it('should publish to filter service', () => {
    let filterSer = TestBed.get(FilterService);
    let setFilterSpy = spyOn(filterSer, 'setFilter');
    component.batchId = '1002';

    component.update();

    expect(setFilterSpy).toHaveBeenCalledWith(component.filter);
  });

  it('should publish to sort filter serivce', () => {
    let expectSortByMV = true;
    let setFilterSpy = spyOn(TestBed.get(FilterSortService), 'setFilter');

    component.sortByMostVacancies = expectSortByMV;

    component.updateSort();

    expect(component.sort.sortByMostVacancies).toBe(expectSortByMV);
    expect(setFilterSpy).toHaveBeenCalledWith(component.sort);
  });

  it('should update the stores', () => {
    let userUpdateSpy = spyOn(TestBed.get(UserStore), 'updateUsers');
    let roomUpdateSpy = spyOn(TestBed.get(RoomStore), 'updateRooms');
    let batcUpdateSpy = spyOn(TestBed.get(BatchStore), 'updateBatches');

    component.update();

    expect(userUpdateSpy).toHaveBeenCalled();
    expect(roomUpdateSpy).toHaveBeenCalled();
    expect(batcUpdateSpy).toHaveBeenCalled();
  });
});
