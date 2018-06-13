import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { BehaviorSubject } from "rxjs";
import { SelectionService } from "../services/selection.service";

@Injectable({
  providedIn: 'root'
})
export class UserStore {
  readonly defaultStore: User[] = [];

  private userSubject: BehaviorSubject<User[]>;

  constructor (private backendService: SelectionService) {
    this.loadInitData();
  }

  loadInitData(){
    this.backendService.getAllUsers()
      .pipe (

      )
      .subscribe(
        res => this.userSubject.next(res)
      )
  }

  get users(){
    return this.userSubject.asObservable();
  }
}
