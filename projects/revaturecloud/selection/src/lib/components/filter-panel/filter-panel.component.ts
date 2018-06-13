/**
 * The filter panel of the housing selection front-end.
 *
 * Provides a UI that allows the user to filter and sort
 * the data shown in other components.
 */

import { Component, OnInit } from '@angular/core';
//import { SelectionService } from '../../services/selection.service';
import { FilterService } from '../../services/filter.service';
import { FilterSortService } from '../../services/filter-sort.service';
import { SearchParameters } from '../../models/searchParameters.model';
import { SortParameters } from '../../models/sortParameters.model';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent implements OnInit {

  // Drop down select - options
  batches: string[];
  cities: string[];
  buildings: string[];

  // Drop down select - currently selected
  batch: string;
  city: string;
  building: string;

  // Gender radio
  readonly genders: string[] = ['Male', 'Female', 'Other'];
  gender: string;

  // Check box booleans
  vacantRoomsOnly: boolean;
  sortByMostVacancies: boolean;
  unhousedUsersOnly: boolean;

  // Output object
  filter: SearchParameters;
  sort: SortParameters;

  constructor(
      //private selectionService: SelectionService,
      private filterService: FilterService,
      private filterSortService: FilterSortService) {

    this.reset();

    this.filter = {
      batch: null,
      city: null,
      gender: null,
      batchMinimumPercentage: null,
      isCompletelyUnassigned: null,
    };

    this.sort = {
      sortByMostVacancies: false,
    };
  }

  ngOnInit() {
    //this.batches = new Set(this.selectionService.getAllBatches());
    //this.cities = new Set(this.selectionService.getAllCities());
    //this.buildings = new Set(this.selectionService.getAllBuildings());
    this.batches = ['batch1', 'batch2', 'batch3'];
    this.cities = ['New York', 'Reston', 'Tampa'];
    this.buildings = ['b1', 'b2', 'b3'];
  }

  /**
   * Resets the filter form to default values
   */
  reset(): void {
    this.batch = null;
    this.city = null;
    this.building = null;

    this.gender = null;

    this.vacantRoomsOnly = false;
    this.sortByMostVacancies = false;
    this.unhousedUsersOnly = false;
  }

  /**
   * Takes the current values in the filter form and updates the
   * filterService given in the constructor.
   */
  submit(): void {
    this.batch;
    this.city;

    this.gender;

    this.vacantRoomsOnly;
    this.sortByMostVacancies;
    this.unhousedUsersOnly;

    this.filter = {
      batch: this.batch,
      city: this.city,
      gender: this.gender,
      batchMinimumPercentage: null,
      isCompletelyUnassigned: this.vacantRoomsOnly,
    }

    this.sort = {
      sortByMostVacancies: this.sortByMostVacancies,
    }

    this.filterService.setFilter(this.filter);
    this.filterSortService.setFilter(this.sort);
  }
}
