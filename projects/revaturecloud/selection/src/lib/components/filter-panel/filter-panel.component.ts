import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../selection.service';
import { FilterService } from "../../services/filter.service";
import { SearchParameters } from "../../models/searchParameters.model";
import { Batch } from '../../models/batch.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent implements OnInit {

  // Drop down select - options
  batches: Array<string>;
  cities: Array<string>;
  buildings: Array<string>;

  // Drop down select - currently selected
  batch: string;
  city: string;
  building: string;

  // Gender radio
  readonly genders: string[] = ["Male", "Female", "Other"];
  gender: string;

  // Check box booleans
  vacantRoomsOnly: boolean;
  sortByMostVacancies: boolean;
  unhousedUsersOnly: boolean;

  // Output object
  filter: SearchParameters;

  constructor(private selectionService: SelectionService,
      private filterService: FilterService) {

    this.reset();

    this.filter = {
      location: null,
      batch: null,
      batchMinimumPercentage: null,
      gender: null,
      isCompletelyUnassigned: null
    };
  }

  ngOnInit() {
    //this.batches = new Set(this.selectionService.getAllBatches());
    //this.cities = new Set(this.selectionService.getAllCities());
    //this.buildings = new Set(this.selectionService.getAllBuildings());
    this.batches = ["batch1", "batch2", "batch3"];
    this.cities = ["city1", "city2", "city17"];
    this.buildings = ["b1", "b2", "b3"];
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
    // this.batch;
    // this.city;

    // this.gender;

    // this.vacantRoomsOnly;
    // this.sortByMostVacancies;
    // this.unhousedUsersOnly;

    // this.filterService.setFilter(this.filter);
  }
}
