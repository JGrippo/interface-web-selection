import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../selection.service';
import { SearchParameters } from "../../models/searchParameters.model";
import { Batch } from '../../models/batch.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent implements OnInit {

  batches: Set<string>;
  cities: Set<string>;
  buildings: Set<string>;

  batch: string;
  city: string;
  building: string;
  //gender: Gender;
  gender: string;
  readonly genders: string[] = ["Male", "Female", "Other"];

  vacantRoomsOnly: boolean;
  sortByMostVacancies: boolean;
  unhousedUsersOnly: boolean;

  filter: SearchParameters;

  constructor(private selectionService: SelectionService) {

    this.gender = null;

    this.vacantRoomsOnly = false;
    this.sortByMostVacancies = false;
    this.unhousedUsersOnly = false;

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
    this.batches = new Set<string>(["batch1", "batch2", "batch3"]);
    //this.cities = new Set(this.selectionService.getAllCities());
    //this.buildings = new Set(this.selectionService.getAllBuildings());this.filter = {
  }

}

enum Gender {
  Male, Female, Other
}
