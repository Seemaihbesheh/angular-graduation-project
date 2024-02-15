import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import {AppyJob} from './AppyJob'
import { ActivatedRoute, Params } from '@angular/router';
import { UserStoreService } from '../user-store.service';
@Component({
    selector: 'app-applyJob-page',
    templateUrl: './userapplyJob-page.component.html',
    styleUrls: ['./userapplyJob-page.component.scss']
})
export class UserApplyJobPageComponent implements OnInit {

 
     public emailSEARCH!: string;

   

    public email: string = "";


  
    AppyJobs: AppyJob[];
    searchAppyJobs: AppyJob[];


    constructor(
        private service: AuthService,
        private rout:ActivatedRoute,
        private userStore: UserStoreService
    ) {}



    usertest: {id:number};


    ngOnInit() {

     
      this.userStore.getEmailFromStore()
      .subscribe(val => {
        //  console.log(" now in getFullemailFromStore function ");


          let fulllemailFromToken = this.service.getEmailFromTken();

          this.email = val || fulllemailFromToken
          console.log("user data 'email' whose login");

          console.log(this.email);
      })

   
   // this.getApplyJob();
    this.getApplyJobByID();


    }

    // public getApplyJobByID() {
    //   this.service.getApplyJobByid(this.usertest.id).subscribe(data => {
    //     this.AppyJobs = data;
       
          
    //   });
    //  }


     public getApplyJobByID() {
    //  alert(" User can see which jobs they apply");
        this.service.getapplyJobUser(this.email).subscribe(data => {
          this.AppyJobs = data;
         
            console.log("ApplyJob by email:");
            console.log(this.AppyJobs);
        });
       }
  

   public getApplyJob() {
      this.service.getApplyJob().subscribe(data => {
        this.AppyJobs = data;
       
          
      });
     }

     

   
 // big serach

 






}