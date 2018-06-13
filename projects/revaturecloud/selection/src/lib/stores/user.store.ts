import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { BehaviorSubject } from "rxjs";
import { SelectionService } from "../services/selection.service";
import { FilterService } from "../services/filter.service";
import { SearchParameters } from "../models/searchParameters.model";

@Injectable({
  providedIn: 'root'
})
export class UserStore {

  private _userSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  private _filter: SearchParameters;

  constructor (
    private backendService: SelectionService,
    private filterService: FilterService
  ) {
    this.loadInitData();
  }

  loadInitData(){
    this.backendService.getAllUsers()
      .pipe (

      )
      .subscribe(
        res => this._userSubject.next(res)
      )

      this.filterService.getFilter()
      .subscribe(
        res => {
          this._filter = res;
        }
      )
  }

  get users(){
    return this._userSubject.asObservable();
  }


  updateUsers() {
    this.backendService.getComplexRequestOfUsers(this._filter)
      .subscribe(
        res=> this._userSubject.next(res)
      );
  }
}
