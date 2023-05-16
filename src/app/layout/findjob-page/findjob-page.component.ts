//findjob-page
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppyJob } from '../applyJob-page/AppyJob';
import { pushJob } from './pushJob';
import { Pipe, PipeTransform } from '@angular/core';

import { Status } from '../dashboard/components/add-post/models/status';
import { UserStoreService } from '../user-store.service';

@Component({
    selector: 'app-findjob-page',
    templateUrl: './findjob-page.component.html',
    
    styleUrls: ['./findjob-page.component.scss']
})

export class FindjobPageComponent implements OnInit {
  date1: Date = new Date('01.01.2020');
  currentDate: Date = new Date();

  red: boolean =false;


  public tokenName: string = "";
  public email: string = "";
  public emailstring : string = "";
  public tokenNamestring: string = "";
  red2: boolean =false;
  pushJob: pushJob[];

    title: string ='sosos';

    public titleSEARCH!: string;
    public requirmentSEARCH!: string;

    public EmailSEARCH!: string;

//  form: FormGroup;
form!: FormGroup;
// product:Product = {id:0,productName:'',productImage:''};
imageFile?: File;
status!: Status;
    constructor(
        private service: AuthService, 
        private fb: FormBuilder,
        private userStore: UserStoreService
       
      ) {}






      checktime(){

        this.compareDates();




      }
   
      compareDates(){
        if(this.date1.getTime()<this.currentDate.getTime()){
          console.log("date1 is before current date");
        alert(" date1 is before current date,so we want now to red this component ");
        this.red=true;

        }
        if(this.date1.getTime()>this.currentDate.getTime()){
          console.log("date1 is after current date");
       //   alert(" date1 is after current date ,so we want now to red this component");

        }


      }





//searchbycomapnyrequirment


confirmTosendcomapnyrequirment() {
   
  console.log("print searchbycomapnyEmail befor service ");
   console.log(this.requirmentSEARCH);
 //searchbyTitle
   this.service.searchbycomapnyrequirment(this.requirmentSEARCH).subscribe(data => {
    this.pushJob = data;

    console.log("i want to print push job print inside service  ");

    console.log(this.pushJob);
    this.requirmentSEARCH ="";
      
  });
 

}


      //searchbycomapnyEmail
      confirmTosendcomapnyEmail() {
   
        console.log("print searchbycomapnyEmail befor service ");
         console.log(this.EmailSEARCH);
       //searchbyTitle
         this.service.searchbycomapnyEmail(this.EmailSEARCH).subscribe(data => {
          this.pushJob = data;

          console.log("i want to print push job print inside service  ");

          console.log(this.pushJob);
          this.EmailSEARCH ="";
            
        });
       
     
    }


      confirmTosendTitle() {
   
        console.log("print titleSEARCH befor service ");
         console.log(this.titleSEARCH);
       //searchbyTitle
         this.service.searchbyTitle(this.titleSEARCH).subscribe(data => {
          this.pushJob = data;

          console.log("i want to print push job print inside service  ");

          console.log(this.pushJob);
          this.titleSEARCH ="";
            
        });
       
     
    }

    scroll(el: HTMLElement) {
        el.scrollIntoView();
      }

      private getpushJob(): void {
        this.service.getpushJob().subscribe(data => {
          this.pushJob = data;
          // console.log("i want to print push job print  ");

          console.log(this.pushJob);

        });
      }
  
      
      get f() {
        return this.form.controls;
      }
      onPost() {
        this.status = { statusCode: 0, message: 'wait..' };
    
        const frmData: AppyJob = Object.assign(this.form.value);
        frmData.imageFile = this.imageFile;
        // we will call our service, and pass this object to it
        this.service.add(frmData).subscribe({
          next: (res) => {
            this.status = res;
          },
          error: (err) => {
            this.status = { statusCode: 0, message: 'Error on server side' }
            console.log(err);
          }
        })
      }
      
    
      onChange(event: any) {
        this.imageFile = event.target.files[0];
      }










    
      ngOnInit(): void {
        this.getpushJob();

        
        this.userStore.getEmailFromStore()
        .subscribe(val => {
          //  console.log(" now in getFullemailFromStore function ");


            let fulllemailFromToken = this.service.getEmailFromTken();

            this.email = val || fulllemailFromToken
            console.log("user data 'email' whose login");
//emailstring
this.emailstring=this.email;
            console.log(this.email);
        })



        
        this.userStore.getFullNameFromStore()
            .subscribe(val => {

            //    console.log(" nnnnnnnnnnow in getFullNameFromStore function ");

            //  let fulllNameFromToken = this.auth.getRoleFromTken();


              let fulllNameFromToken = this.service.getfullNameFromTken();

                this.tokenName = val || fulllNameFromToken
                console.log("name from token is");
                this.tokenNamestring=this.tokenName;
                console.log(this.tokenName);



            })



        // this.compareDates();
        this.form = this.fb.group({
          'id': [0],
          'full_Name': ['', Validators.required],
          'email': ['', Validators.required],
          'city': ['', Validators.required],

          'pushJobId': ['', Validators.required],
          'phone_Number': ['', Validators.required],
          'gPA': ['', Validators.required],

          'imageFile': []
          
        })
      }
 



     



}
