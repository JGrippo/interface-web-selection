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
import { UserStore } from '../../stores/user.store';
import { RoomStore } from '../../stores/room.store';
import { BatchStore } from '../../stores/batch.store';
import { LocationStore } from '../../stores/location.store';
import { SearchParameters } from '../../models/searchParameters.model';
import { SortParameters } from '../../models/sortParameters.model';
import { Batch } from '../../models/batch.model';
import { Room } from '../../models/room.model';

describe('FilterPanelComponent', () => {
  let component: FilterPanelComponent;
  let fixture: ComponentFixture<FilterPanelComponent>;
  let mockFilSer;
  let mockFilSorSer;
  let mockUserStore;
  let mockRoomStore;
  let mockBatchStore;
  let mockLocStore;

  beforeEach(async(() => {
    let mockFilSer = jasmine.createSpyObj('FilterService', ['setFilter', 'getFilter']);
    let mockFilSorSer = jasmine.createSpyObj('FilterSortService', ['setFilter']);
    let mockUserStore = jasmine.createSpyObj('UserStore', ['']);
    let mockRoomStore = jasmine.createSpyObj('RoomStore', ['']);
    let mockBatchStore = jasmine.createSpyObj('BatchStore', ['']);
    let mockLocStore = jasmine.createSpyObj('LocationStore', ['']);

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        HttpModule,
        CommonModule,
      ],
      declarations: [ FilterPanelComponent ],
      providers: [
        {provide: FilterService, usevalue: mockFilSer},
        {provide: FilterSortService, usevalue: mockFilSorSer},
        {provide: UserStore, usevalue: mockUserStore},
        {provide: RoomStore, usevalue: mockRoomStore},
        {provide: BatchStore, usevalue: mockBatchStore},
        {provide: LocationStore, usevalue: mockLocStore}
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
    let expectedHBA = false;
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
    component.batchId = '1002';

    component.update();

    expect(TestBed.get(MockFilterService).setFilter).toHaveBeenCalledWith(component.filter);
  });

  it('should publish to sort filter serivce', () => {
    let expectSortByMV = true;

    component.sortByMostVacancies = expectSortByMV;

    component.updateSort();

    expect(component.sort.sortByMostVacancies).toBe(expectSortByMV);
    expect(TestBed.get(MockFilterSortService).setFilter).toHaveBeenCalledWith(component.sort);
  });

  it('should update the stores', () => {
    component.update();

    expect(TestBed.get(MockUserStore).updateUsers).toHaveBeenCalled();
    expect(TestBed.get(MockRoomStore).updateRooms).toHaveBeenCalled();
    expect(TestBed.get(MockBatchStore).updateBatches).toHaveBeenCalled();
  });
});
