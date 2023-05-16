import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


//import {Statussss} from './company-page/Statussss'
import { Statussss } from '../company-page/Statussss';
import { comapny } from '../company-page/comapny';
import { UserStoreService } from '../user-store.service';
@Component({
  selector: 'app-editcompany-page',
  templateUrl: './editcompany-page.component.html',
  styleUrls: ['./editcompany-page.component.scss']
})


export class EditcompanyPageComponent implements OnInit {

  numInputFields: number = 0;
  frm!: FormGroup;
  status!: Statussss;
  comapny2: comapny[];
  get f() {
    return this.frm.controls; //will be used in validation
  }

  public id_login: Number = 0;

  constructor(private fb: FormBuilder, private service: AuthService, private userStore: UserStoreService) {
    this.getcom();
  }



  getcom() {
    // const id=10;
    // if(id ==10){
    // this.service.getByIdcom(id).subscribe(
    this.service.getByIdcom((this.id_login.valueOf())).subscribe(

      {
        next: (res) => {
          this.frm.patchValue(res);
           console.log("hi im in  getByIdcom ");
           
          console.log((this.id_login.valueOf()));
          this.getcompanyid();

        },
        error: (err) => {
          console.log(err);
        }
      }
    );
    //   }


  }


  private getcompanyid(): void {
    // var  idd =10;
    // this.service.getbyid(idd).subscribe(data => {
    this.service.getbyid((this.id_login.valueOf())).subscribe(data => {
      this.comapny2 = data;

      console.log("hi im in  getByIdcom ");
      console.log((this.id_login.valueOf()));
      console.log("this.comapny2");
      console.log(this.comapny2);



    });
  }



  onPost() {
    this.status = { statusCode: 0, message: 'wait..' };
    this.service.addUpdate(this.frm.value).subscribe({
      next: (res) => {
        this.status = res;

        // this.frm.reset();
        this.getcom();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  funform() {
    this.frm = this.fb.group({
      id: [0],
      userName: [null],
      phoneNumber: [null],
      email: [null],
      password: [null],
      about: [null],
      address: [null],
      services_title: [null],
      services_about: [null]
      // 'id':[0],
      //'name':['',Validators.required]
    })

  }

  ngOnInit() {


    this.funform();

    this.userStore.getIdFromStore()
      .subscribe(val => {
        //console.log(" now in getRoleFromStore function ");


        let fulllidFromToken = this.service.getIdFromTken();// string


        var numberValue = Number(fulllidFromToken);

        this.id_login = val || numberValue
        console.log("user data 'idd' whose login == == = = = in company company ");

        console.log(this.id_login);
      })

    // this.funform();

  }
  //  this.funform();





}
