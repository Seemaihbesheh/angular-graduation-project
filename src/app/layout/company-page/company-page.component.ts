import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { comapny } from './comapny';
import { UserStoreService } from '../user-store.service';
import { ActivatedRoute, Params } from '@angular/router';
import { reviews } from './reviews';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  Validators } from '@angular/forms';
import { services } from './services';

@Component({
    selector: 'app-company-page',
    templateUrl: './company-page.component.html',
    styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent implements OnInit {
  form: FormGroup;
  frm!: FormGroup;
  comapny: comapny[];

  comapny2: comapny[];
  project: services[];
  reviews:reviews[];
    public id_login: Number = 0;


    constructor(
      private service: AuthService,
      private userStore: UserStoreService,
      private rout:ActivatedRoute,
      private fb: FormBuilder,
      ){}

     
   






      reviewSaved = false;

      usertest: {id:number};


      ngOnInit() {


  
        this.initForm();



      this.usertest ={
        id:this.rout.snapshot.params['id']
      };
// to change in two thing
      this.rout.params.subscribe((data: Params) =>{
        this.usertest ={

          id:data['id'],
        };
      });











      

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

      this.getCompanyProfileByfindJob();
     this.getprojects();
      this.getreview();

    }
   
    submit():void {
   
      const formVal = Object.assign({}, this.form.value);
  
      this.reviewSaved = true;

      this.signUpp();
    }


    private getprojects(): void {
      // var  idd =60;
      //        this.service.getuserbyid(idd).subscribe(data => {
  
      this.service.getservice().subscribe(data => {
        this.project = data;
        console.log("i want to pront all projectss ");
        console.log(this.project);
      });
    }
  

    private signUpp(): void {
      this.service.registernewreview(this.form.value).subscribe(
        res => {
          console.log("hi i'am call the controoler")
         
          this.form.reset();
        },
        err => {
        
        }
      );
    }
  




    private getreview(): void {
      // var  idd =60;
      //        this.service.getuserbyid(idd).subscribe(data => {

       this.service.getreview().subscribe(data => {
        this.reviews = data;      
        console.log(this.reviews); console.log(this.reviews); console.log(this.reviews); console.log(this.reviews);
       });
     }

      private getCompanyProfileByfindJob(): void {

    
     //   var  idd =14;
////////////////////////////////////i want to coorect the controller in the service
        this.service.getbyid(this.usertest.id).subscribe(data => {

          this.comapny2 = data;
          
   
          console.log("this.comapny2");
        console.log(this.comapny2);
        
        console.log(" in oninte here (this.id_login.valueOf())");
        console.log((this.id_login.valueOf()));
        
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
    
 
      // private getcompanyY(): void {
      //   this.service.getcompany().subscribe(data => {
      //     this.comapny = data;
        
      //  console.log(this.comapny);
         

      //   });
      // }

      initForm():void {
        this.form = this.fb.group({
     
          UserName : [null],
          ReviewContent : [null]
          
        });
    }

     
}



