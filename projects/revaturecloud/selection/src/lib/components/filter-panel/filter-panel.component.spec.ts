import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPanelComponent } from './filter-panel.component';
import { FilterService } from '../../services/filter.service';
import { FilterSortService } from '../../services/filter-sort.service';

describe('FilterPanelComponent', () => {
  let component: FilterPanelComponent;
  let fixture: ComponentFixture<FilterPanelComponent>;
  let componentwith: FilterPanelComponent;
  let MockFilter;
  let MockFilterSort;

  beforeEach(async(() => {
    MockFilter = jasmine.createSpyObj(['getFilter', 'setFilter']);
    MockFilterSort = jasmine.createSpyObj(['getFilter', 'setFilter']);

    TestBed.configureTestingModule({
      declarations: [ FilterPanelComponent ],
      providers: [
        {provide: FilterService, useValue: MockFilter},
        {provide: FilterSortService, userValue: MockFilterSort}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPanelComponent);
    componentwith = new FilterPanelComponent(null, MockFilter, MockFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset properly', () => {
    component.batch = "batch";
    component.city = "asdf";
    component.building = "asdf";

    component.reset();

    expect(component.batch).toBeNull();
    expect(component.city).toBeNull();
    expect(component.building).toBeNull();
  });

  it('should publish to filter service', () => {
    let setSpy = spyOn(MockFilter, 'setFilter');

    componentwith.batch = 'batch1';

    componentwith.submit();

    expect(setSpy).toHaveBeenCalledWith(componentwith.filter);
  });

  it('should publish to filter sort service', () => {
    let setSpy = spyOn(MockFilterSort, 'setFilter');

    componentwith.sortByMostVacancies = true;

    componentwith.submit();

    expect(setSpy).toHaveBeenCalledWith(componentwith.sort);
  });
});
