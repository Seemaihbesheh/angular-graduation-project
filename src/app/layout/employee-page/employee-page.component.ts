import { Component, OnInit } from '@angular/core';


import { AuthService } from '../auth.service';
import { userr } from './userr';
import { UserStoreService } from '../user-store.service';
import { skill } from './skill';
import { projects } from './projects';


@Component({
    selector: 'app-employee-page',
    templateUrl: './employee-page.component.html',
    styleUrls: ['./employee-page.component.scss']
})
export class EmployeePageComponent implements OnInit {

    //comapny: comapny[];
    user: userr[];
    
    skill:skill[];

    project: projects[];
    
    constructor( private service: AuthService,private userStore: UserStoreService) {}

    public id_login: Number = 0;







    ngOnInit() {
      this.userStore.getIdFromStore()
      .subscribe(val => {
          //console.log(" now in getRoleFromStore function ");
  
  
          let fulllidFromToken = this.service.getIdFromTken();// string
  
  
          var numberValue = Number(fulllidFromToken);
  
          this.id_login = val || numberValue
          console.log("user data 'idd' whose login in user component");
  
          console.log(this.id_login);
      })
  
        this.getuserid();

       this.getskill();
       this.getprojects();


      }
   



      private getuserid(): void {
       // var  idd =60;
       //        this.service.getuserbyid(idd).subscribe(data => {

        this.service.getuserbyid((this.id_login.valueOf())).subscribe(data => {
         this.user = data;      
         console.log(this.user);
        });
      }



      private getskill(): void {
        // var  idd =60;
        //        this.service.getuserbyid(idd).subscribe(data => {
 
         this.service.getSkilss().subscribe(data => {
          this.skill = data;      
          console.log(this.skill); console.log(this.skill); console.log(this.skill); console.log(this.skill);
         });
       }
      
//getprojects

private getprojects(): void {
  // var  idd =60;
  //        this.service.getuserbyid(idd).subscribe(data => {

   this.service.getproject().subscribe(data => {
    this.project = data;      
    console.log("i want to pront all pro");
    console.log(this.project);
   });
 }
}
