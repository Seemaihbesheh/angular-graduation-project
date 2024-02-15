//findjob-page
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppyJob } from '../applyJob-page/AppyJob';
import { pushJob } from './pushJob';
import { Pipe, PipeTransform } from '@angular/core';

import { Status } from '../dashboard/components/add-post/models/status';
import { UserStoreService } from '../user-store.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-findjobCompany-page',
    templateUrl: './findjobCompany-page.component.html',
    
    styleUrls: ['./findjobCompany-page.component.scss']
})

export class FindjobCompanyPageComponent implements OnInit {
  date1: Date = new Date('01.01.2020');
  currentDate: Date = new Date();

  red: boolean =false;


  usertest: {id:string};

  public tokenName: string = "";
  public email: string = "";
  public emailstring : string = "";
  public tokenNamestring: string = "";
  red2: boolean =false;
  card: boolean =false;
  pushJob: pushJob[];
  showDiv: boolean = false;
    title: string ='sosos';

    public id_login: Number = 0;
    jobId:number=27
    jobId2:number=50
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
        private userStore: UserStoreService,
        private rout:ActivatedRoute
       
      ) {}





sortJobDeadlineDescending() {
  this.pushJob.sort((a, b) => {
    if (a.job_PuplishDate > b.job_PuplishDate) {
      return -1; // a should come before b
    } else if (a.job_PuplishDate < b.job_PuplishDate) {
      return 1; // b should come before a
    } else {
      return 0; // both dates are equal, maintain current order
    }
  });
}




      checktime(){
        this.showDiv=true;
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



      //searchbycomapnyEmail
     

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

    


      private getpushJob(): void {

        this.service.getpushJobByIdComapny(this.id_login.valueOf()).subscribe(data => {
          this.pushJob = data;
          // console.log("i want to print push job print  ");

          console.log(this.pushJob);
          console.log(this.pushJob); console.log(this.pushJob);

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


            this.userStore.getIdFromStore()
            .subscribe(val => {
                //console.log(" now in getRoleFromStore function ");
        
        
                let fulllidFromToken = this.service.getIdFromTken();// string
        
        
                var numberValue = Number(fulllidFromToken);
        
                this.id_login = val || numberValue
                console.log("user data 'idd' in push job comapny ");
        
                console.log(this.id_login);
            })
        

            this.getpushJob();

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
