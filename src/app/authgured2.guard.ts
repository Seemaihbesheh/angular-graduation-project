import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './layout/auth.service';
import { CanActivate } from '@angular/router';
//import { NgbToastService } from 'ng-angular-popup';
//ng g g authgured2

//check if user whose are log in now
@Injectable({
  providedIn: 'root'
})
export class Authgured2Guard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
   // constructor(private auth: AuthService, private router: Router, private toast: NgbToastService) {
  }

  canActivate(): boolean {

    if (this.auth.isLoggedIn()) {
      return true
    } else {
     // this.toast.error({detail :"Error",summary:"Plwan login first"});
      this.router.navigate(['login'])
    console.log("we are not a user in this app sp please go and sign up now!!,");
      return false
    }
  }




}


