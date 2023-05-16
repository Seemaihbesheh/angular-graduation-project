import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private fullName$ = new BehaviorSubject<string>("");
  private role$ = new BehaviorSubject<string>("");
  private email$ = new BehaviorSubject<string>("");
  private id$ = new BehaviorSubject<Number>(0);

  constructor() { }



  public getRoleFromStore() {

    return this.role$.asObservable();
  }

  public setRoleFromStore(role: string) {

     this.role$.next(role);
  }


  public getFullNameFromStore() {
    return this.fullName$.asObservable();
  }

  public setFullNameForStore(fullName: string) {
    this.fullName$.next(fullName);
  }


  
  public getEmailFromStore() {

    return this.email$.asObservable();
  }




  public setEmailFromStore(role: string) {

     this.email$.next(role);
  }




public getIdFromStore() {

    return this.id$.asObservable();
  }


  
  public setIdlFromStore(id: Number) {

    this.id$.next(id);
 }

}
