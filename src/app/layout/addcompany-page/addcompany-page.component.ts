import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


//import {Statussss} from './company-page/Statussss'
import { Statussss } from '../company-page/Statussss';
import { comapny } from '../company-page/comapny';
@Component({
    selector: 'app-addcompany-page',
    templateUrl: './addcompany-page.component.html',
    styleUrls: ['./addcompany-page.component.scss']


})
export class AddcompanyPageComponent implements OnInit {




   // userr: userr[];
   form: FormGroup;
   loading = false;
 
   btnLoader = false;
   
   constructor(
        private service: AuthService,
        private fb: FormBuilder,
        ) {}

   ngOnInit() {
       this.initForm();
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
       this.service.registernewcompany(this.form.value).subscribe(
         res => {
           console.log("hi i'am call the company register")
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
             UserName: [null],
           
              phoneNumber:  [null],
              address : [null],
              about : [null],
         
              email : [null],
              services_about : [null],
              services_title : [null],
              password : [null],
              Role:[null]
                //  Token:[null],
           });
       }
 
      

}
