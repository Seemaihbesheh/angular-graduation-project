import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
//import { comapny } from './admin';
import {admin} from './admin';
import { UserStoreService } from '../user-store.service';
@Component({
    selector: 'app-admin-page',
    templateUrl: './admin-page.component.html',
    styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  admin: admin[];

  admin2: admin[];
    
// we don't use it now!! becouse admin is static in website
    public id_login: Number = 0;


    constructor(
      private service: AuthService,
      private userStore: UserStoreService){}

     
   


    ngOnInit() {


      this.userStore.getIdFromStore()
      .subscribe(val => {
          //console.log(" now in getRoleFromStore function ");
  
  
          let fulllidFromToken = this.service.getIdFromTken();// string
  
  
          var numberValue = Number(fulllidFromToken);
  
          this.id_login = val || numberValue
          console.log("user data 'idd' whose login == == = = = ");
  
          console.log(this.id_login);
      })
  



console.log(" in oninte here (this.id_login.valueOf())");
console.log((this.id_login.valueOf()));

    
      this.getadminid();
    }
   

    
     

     
    private getadminid(): void {
      var  idd =1;
      this.service.getadminbyid(idd).subscribe(data => {
       this.admin2 = data;
       

       console.log("this.admin2");
     console.log(this.admin2);
     
     console.log(" in oninte here (this.id_login.valueOf())");
     console.log((this.id_login.valueOf()));
     
      });
    }
    

}



