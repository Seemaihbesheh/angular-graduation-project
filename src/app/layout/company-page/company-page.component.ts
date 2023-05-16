import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { comapny } from './comapny';
import { UserStoreService } from '../user-store.service';
@Component({
    selector: 'app-company-page',
    templateUrl: './company-page.component.html',
    styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent implements OnInit {

  comapny: comapny[];

  comapny2: comapny[];
    

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

     // this.getcompanyY();
      this.getcompanyid();
    }
   

    
      private getcompanyY(): void {
        this.service.getcompany().subscribe(data => {
          this.comapny = data;
        
       console.log(this.comapny);
         

        });
      }

     
    private getcompanyid(): void {

      
      var  idd =14;
    //  this.service.getbyid(idd).subscribe(data => {
        this.service.getbyid(this.id_login.valueOf()).subscribe(data => {

       this.comapny2 = data;
       

       console.log("this.comapny2");
     console.log(this.comapny2);
     
     console.log(" in oninte here (this.id_login.valueOf())");
     console.log((this.id_login.valueOf()));
     
      });
    }
    

}



