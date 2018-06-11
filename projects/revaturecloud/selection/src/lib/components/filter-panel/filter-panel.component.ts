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

  private batches: Set<Batch>;
  private cities: Set<String>;
  private buildings: Set<String>;

  private batch: Batch;
  private city: String;
  private building: String;

  private gender: Gender;

  private vacantRoomsOnly: boolean;
  private sortByMostVacancies: boolean;
  private unhousedUsersOnly: boolean;

  public filter: SearchParameters;

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
    this.batches = new Set(this.selectionService.getAllBatches());
    this.cities = new Set(this.selectionService.getAllCities());
    this.buildings = new Set(this.selectionService.getAllBuildings());
  }

}

enum Gender {
  Male, Female, Other
}
