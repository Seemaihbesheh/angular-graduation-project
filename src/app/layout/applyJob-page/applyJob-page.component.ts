import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import { AppyJob } from './AppyJob'
import { ActivatedRoute, Params } from '@angular/router';
import { approv } from './approv';
import { reject } from './reject';
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

  public letsSearch!: string;
  searchText: any;

  approvedUser: approv[];
rejectedUser:reject[];
  public selectedStatus: string = '';
  public userEmail: string = '';


  public userEmail2: string = '';


  public onItemSelectedstatusS(selectedValuestatus: string, email: string): void {
    this.selectedStatus = selectedValuestatus;
    console.log('Selected status:', this.selectedStatus);

    if (this.selectedStatus === 'Approve') {
      this.userEmail = email;

      // Assuming you have access to the 'user' object in your component
      console.log(" this.userEmail which i approve are :");
      console.log(this.userEmail);

      const data: approv = {
        id: 0,
        emailUser: this.userEmail
      };

      this.service.postData(data).subscribe(
        response => {
          console.log('Data added successfully:', response);
          // Handle success
          this.getallapprove();

        },
        error => {
          console.error('Error:', error);
          // Handle error
        }
      );


    } 



    if (this.selectedStatus === 'Reject') {
      this.userEmail2 = email;

      // Assuming you have access to the 'user' object in your component
      console.log(" this.userEmail which i Reject are :");
      console.log(this.userEmail2);

      const data: approv = {
        id: 0,
        emailUser: this.userEmail2
      };

      this.service.postDataReject(data).subscribe(
        response => {
          console.log('Data added successfully:', response);
          // Handle success
          this.getallreject();

        },
        error => {
          console.error('Error:', error);
          // Handle error
        }
      );


    } 




  }







  public status: Array<{ field: string }> = [
    { field: 'Approve' },
    { field: 'Reject' },
    { field: 'In Progress' },

  ];
  public items: Array<{ field: string }> = [
    { field: 'Name' },
    { field: 'City' },
    { field: 'Pdf' },
    { field: 'Email' },
  ];
  public onItemSelected(selectedValue: string): void {
    console.log('Selected item:', selectedValue);

  }


  public onItemSelectedstatus(selectedValuestatus: string): void {
    console.log('Selected item:', selectedValuestatus);






  }




  AppyJobs: AppyJob[];
  searchAppyJobs: AppyJob[];


  constructor(
    private service: AuthService,
    private rout: ActivatedRoute
  ) { }



  usertest: { id: number };


  ngOnInit() {

    this.usertest = {
      id: this.rout.snapshot.params['id']
    };
    // to change in two thing
    this.rout.params.subscribe((data: Params) => {
      this.usertest = {

        id: data['id'],
      };
    });



   this.getApplyJob();
    //this.getApplyJobByID();
    this.getallapprove();
    this.getallreject();

  }


  public getApplyJobByID() {

    //      this.service.getApplyJobByid(this.usertest.id).subscribe(data => {
//this.usertest.id
//27
    this.service.getApplyJobByid(this.usertest.id).subscribe(data => {
      this.AppyJobs = data;


    });
  }

  public getApplyJob() {
    this.service.getApplyJob().subscribe(data => {
      this.AppyJobs = data;


    });
  }

  public getallapprove() {
    this.service.getapproved().subscribe(data => {
      this.approvedUser = data;


    });
  }

  //getallreject



  public getallreject() {
    this.service.getrejected().subscribe(data => {
      this.rejectedUser = data;


    });
  }

  confirmletsSearch() {

    console.log("print letsSearch ");
    console.log(this.textSEARCHcity);

    this.service.letsSearch(this.letsSearch).subscribe(data => {
      this.AppyJobs = data;
      this.letsSearch = "";

    });


  }

  // big serach

  confirmTosendCity() {

    console.log("print SEARCH for forget password");
    console.log(this.textSEARCHcity);

    this.service.searchbyCity(this.textSEARCHcity).subscribe(data => {
      this.AppyJobs = data;
      this.textSEARCHcity = "";

    });


  }


  //searchbyName


  confirmTosendName() {

    console.log("print NameSEARCH for forget password");
    console.log(this.NameSEARCH);

    this.service.searchbyName(this.NameSEARCH).subscribe(data => {
      this.AppyJobs = data;
      this.NameSEARCH = "";

    });


  }




  //public cvSEARCH!: string; 
  // public emailSEARCH!: string;
  confirmTosendcv() {

    console.log("print NameSEARCH for forget password");
    console.log(this.cvSEARCH);

    this.service.searchbyCv(this.cvSEARCH).subscribe(data => {
      this.AppyJobs = data;
      this.cvSEARCH = "";

    });


  }
  //confirmTosendemail
  confirmTosendemail() {

    console.log("print emailSEARCH for forget password");
    console.log(this.emailSEARCH);

    this.service.searchbyEmail(this.emailSEARCH).subscribe(data => {
      this.AppyJobs = data;
      this.emailSEARCH = "";

    });


  }



  searchPdf() {

    console.log("print pdfSearch ");
    console.log(this.pdfSearch);

    this.service.searchPDF(this.pdfSearch).subscribe(data => {
      this.AppyJobs = data;
      this.pdfSearch = "";

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