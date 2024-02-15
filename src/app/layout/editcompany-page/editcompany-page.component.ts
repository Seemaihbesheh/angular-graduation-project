import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Statussss } from '../company-page/Statussss';
import { comapny } from '../company-page/comapny';
import { UserStoreService } from '../user-store.service';

@Component({
  selector: 'app-editcompany-page',
  templateUrl: './editcompany-page.component.html',
  styleUrls: ['./editcompany-page.component.scss']
})
export class EditcompanyPageComponent implements OnInit {
  form2: FormGroup;
  numInputFields: number = 0;
  frm!: FormGroup;
  status!: Statussss;
  comapny2: comapny[];

  public successUpdate: boolean = false;

  get f() {
    return this.frm.controls; // will be used in validation
  }

  public id_login: Number = 0;

  constructor(private fb: FormBuilder, private service: AuthService, private userStore: UserStoreService) {
    this.funform();
    this.initForm2();
    this.userStore.getIdFromStore().subscribe(val => {
      let fulllidFromToken = this.service.getIdFromTken(); // string
      var numberValue = Number(fulllidFromToken);
      this.id_login = val || numberValue;
      console.log("user data 'idd' whose login == == = = = in company company ");
      console.log(this.id_login);
      this.getcom();
    });
  }

  getcom() {
    this.service.getByIdcom(this.id_login.valueOf()).subscribe({
      next: (res) => {
        this.frm.patchValue(res);
        console.log("hi im in getByIdcom ");
        console.log(this.id_login);
        this.getcompanyid();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  submit2(): void {
    const formVal2 = Object.assign({}, this.form2.value);
    this.newProject();
  }

  private newProject(): void {
    this.service.registernewservice(this.form2.value).subscribe(
      res => {
        console.log("hi i'am call the cotrooler");
        this.form2.reset();
      },
      err => {
        // Handle error
      }
    );
  }

  private getcompanyid(): void {
    this.service.getbyid(this.id_login.valueOf()).subscribe(data => {
      this.comapny2 = data;
      console.log("hi im in getByIdcom ");
      console.log(this.id_login);
      console.log("this.comapny2");
      console.log(this.comapny2);
    });
  }

  onPost() {
    this.status = { statusCode: 0, message: 'wait..' };
    this.service.addUpdate(this.frm.value).subscribe({
      next: (res) => {
        this.status = res;

        this.successUpdate=true;
        // this.frm.reset();
        this.getcom();
      },
      error: (err) => {
        console.log(err);
      }
    });
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
    });
  }

  initForm2(): void {
    this.form2 = this.fb.group({
      Title: [null],
      Decription: [null]
    });
  }

  ngOnInit() {
    // Do initialization tasks here
  }
}
