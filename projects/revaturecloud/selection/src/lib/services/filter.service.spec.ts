import { TestBed, inject } from '@angular/core/testing';

import { FilterService } from './filter.service';
import { SearchParameters } from "../models/searchParameters.model";

describe('FilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterService]
    });
  });

  it('should be created', inject([FilterService], (service: FilterService) => {
    expect(service).toBeTruthy();
  }));

  it('should update on setFilter', inject([FilterService], (service: FilterService) => {
    //Arrange
    let filter: SearchParameters = {
      location: "1",
      batch: "2",
      batchMinimumPercentage: 10,
      gender: "3",
      isCompletelyUnassigned: false,
    }

    //Subscribe
    let filterActual: SearchParameters;
    service.getFilter().subscribe((f) => filterActual = f);

    //Set
    service.setFilter(filter);

    //Expect
    expect(filterActual).toBe(filter);
  }));

  it('should return null initially', inject([FilterService], (service: FilterService) => {
    let filterActual: SearchParameters;
    service.getFilter().subscribe((f) => filterActual = f);

    expect(filterActual).toBeFalsy();
  }));
});
