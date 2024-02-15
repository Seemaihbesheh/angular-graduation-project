import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


//import {Statussss} from './company-page/Statussss'
import { Statussss } from '../company-page/Statussss';
import { comapny } from '../company-page/comapny';
@Component({
    selector: 'app-createPushjob-page',
    templateUrl: './createPushjob-page.component.html',
    styleUrls: ['./createPushjob-page.component.scss']


})
export class CreatePushjobPageComponent implements OnInit {


  message: string = '';
  response: any = {};
  public totalCounter: number = 0;

   // userr: userr[];
   form: FormGroup;
   loading = false;
 
   btnLoader = false;
   
   constructor(
        private service: AuthService,
        private fb: FormBuilder,
        ) {}

   ngOnInit() {
    const savedResponse = localStorage.getItem('response');
    if (savedResponse) {
      this.response = JSON.parse(savedResponse);
      }
      this.response = JSON.parse(localStorage.getItem('response'));
      const savedTotalCounter = localStorage.getItem('totalCounter');
      if (savedTotalCounter) {
        this.totalCounter = parseInt(savedTotalCounter);
      }
    
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
       this.service.addpushjobs(this.form.value).subscribe(
         res => {
           console.log("hi i'am call the PUSH JOBB  register");
           console.log("hi i'am call the PUSH JOBB  register")
           console.log("hi i'am call the PUSH JOBB  register")

           this.handleSuccess();
           this.form.reset();


           if (!this.response.items) {
            this.response.items = [];
          }
          const existingItemIndex = this.response.items.findIndex(item => item.message === res.message );
          if (existingItemIndex >= 0) {
            this.response.items[existingItemIndex].counter++;
            this.totalCounter++;
          } else {
            this.response.items.push({ message: res.message, counter: 1 });
            this.totalCounter++;
          }
          localStorage.setItem('response', JSON.stringify(this.response));
          localStorage.setItem('totalCounter', this.totalCounter.toString());
          console.log('response.items after:', this.response.items);
          window.location.reload();


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
   
     decrementCounter(item: any) {
      if (item.counter > 0) { 
        item.counter--;
        this.totalCounter--;
        localStorage.setItem('response', JSON.stringify(this.response));
        localStorage.setItem('totalCounter', this.totalCounter.toString());  
      }
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
            Job_PuplishDate:[null],
            companyid:[null]
                //  Token:[null],
           });
       }
 
      

}
