import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import {AppyJob} from './AppyJob'
@Component({
    selector: 'app-applyJob-page',
    templateUrl: './applyJob-page.component.html',
    styleUrls: ['./applyJob-page.component.scss']
})
export class ApplyJobPageComponent implements OnInit {

    public textSEARCHcity!: string;

    public NameSEARCH!: string;

    public cvSEARCH!: string; 
     public emailSEARCH!: string;

     public pdfSearch!: string;

    searchText:any;
   



    AppyJobs: AppyJob[];
    searchAppyJobs: AppyJob[];


    constructor(
        private service: AuthService,
    ) {}

    ngOnInit() {

        
    this.getApplyJob();

    }
   public getApplyJob() {
      this.service.getApplyJob().subscribe(data => {
        this.AppyJobs = data;
       
          
      });
     }




 // big serach

 confirmTosendCity() {
   
        console.log("print SEARCH for forget password");
         console.log(this.textSEARCHcity);
       
         this.service.searchbyCity(this.textSEARCHcity).subscribe(data => {
          this.AppyJobs = data;
          this.textSEARCHcity ="";
            
        });
       
     
    }


    //searchbyName


    confirmTosendName() {
   
      console.log("print NameSEARCH for forget password");
       console.log(this.NameSEARCH);
     
       this.service.searchbyName(this.NameSEARCH).subscribe(data => {
        this.AppyJobs = data;
        this.NameSEARCH ="";
          
      });
     
   
  }




  //public cvSEARCH!: string; 
 // public emailSEARCH!: string;
 confirmTosendcv() {
   
  console.log("print NameSEARCH for forget password");
   console.log(this.cvSEARCH);
 
   this.service.searchbyCv(this.cvSEARCH).subscribe(data => {
    this.AppyJobs = data;
    this.cvSEARCH ="";
      
  });
 

}
//confirmTosendemail
confirmTosendemail() {
   
  console.log("print emailSEARCH for forget password");
   console.log(this.emailSEARCH);
 
   this.service.searchbyEmail(this.emailSEARCH).subscribe(data => {
    this.AppyJobs = data;
    this.emailSEARCH ="";
      
  });
 

}



searchPdf() {
   
  console.log("print pdfSearch ");
   console.log(this.pdfSearch);
 
   this.service.searchPDF(this.pdfSearch).subscribe(data => {
    this.AppyJobs = data;
    this.pdfSearch ="";
      
  });
}


confirmTosend() {
 
     
                                        
    this.service.acceptEmail("ihbsema@gmail.com")
      .subscribe({
        next: (res) => {
          console.log("print email in acceptEmail ");
   
     
       
        },
        error: (err) => {
          console.log("errorrr inside  acceptEmail   ");
  


        }
      })

}


//confirmTodelete
// confirmTodelete() {
 
     
                                        
//   this.service.deleteEmail("ihbsema@gmail.com")
//     .subscribe({
//       next: (res) => {
      

//       },
//       error: (err) => {
//         console.log("errorrr inside  confirmTodelete   ");



//       }
//     })

// }


}