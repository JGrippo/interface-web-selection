import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { BehaviorSubject } from "rxjs";
import { SelectionService } from "../services/selection.service";

@Injectable({
  providedIn: 'root'
})
export class UserStore {

  private _userSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);


  constructor (private backendService: SelectionService) {
    this.loadInitData();
  }

  loadInitData(){
    this.backendService.getAllUsers()
      .pipe (

      )
      .subscribe(
        res => this._userSubject.next(res)
      )
  }

  get users(){
    return this._userSubject.asObservable();
  }
}
