import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


//import {Statussss} from './company-page/Statussss'
import { Statussss } from '../company-page/Statussss';
import { comapny } from '../company-page/comapny';
import { UserStoreService } from '../user-store.service';
@Component({
    selector: 'app-createPushjob-page',
    templateUrl: './createPushjob-page.component.html',
    styleUrls: ['./createPushjob-page.component.scss']


})
export class CreatePushjobPageComponent implements OnInit {

  public id_login: Number = 0;

  // public initialValue = this.id_login; // Set the initial value here

  public companyID : Number = 0;
   // userr: userr[];
   form: FormGroup;
   loading = false;
  
   btnLoader = false;
   
   constructor(
        private service: AuthService,
        private fb: FormBuilder,
        private userStore: UserStoreService
        ) {}

   ngOnInit() {
       this.initForm();

       this.userStore.getIdFromStore()
       .subscribe(val => {
           //console.log(" now in getRoleFromStore function ");
   
   
           let fulllidFromToken = this.service.getIdFromTken();// string
   
   
           var numberValue = Number(fulllidFromToken);
   
           this.id_login = val || numberValue
           console.log("id login in create joobbb");
   
           console.log(this.id_login);
           console.log(" companyID of id in create joobbb");
           this.companyID = this.id_login;

           console.log(this.companyID);
       })





   }



   submit():void {
 
       if (this.form.invalid) {
         this.loading = false;
         return;
       }
           this.btnLoader = true;
   
       this.loading = true;
       const formVal = Object.assign({}, this.form.value);
       console.log("hi i'am  in sumoit now")

       this.signUpp();
     }
    
     private signUpp(): void {
       this.service.addpushjobs(this.form.value).subscribe(
         res => {
           console.log("hi i'am call the PUSH JOBB  register");
      

           this.handleSuccess();
           this.form.reset();
         },
         err => {
           this.handleError(err.error);
         }
       );
     }
   


     private handleSuccess(): void {
       this.loading = false;
     }
   
     private handleError(message?: string): void {
       this.loading = false;
     }
   
   
     initForm():void {
           this.form = this.fb.group({
            Description: [null],
           
            Pre_title:  [null],
            Title : [null],
            Requrment : [null],
         
            Place : [null],
            Email : [null],
            Job_Deadline : [null],
            
            companyid:[null]
                //  Token:[null],
           });
       }
 
      

}
