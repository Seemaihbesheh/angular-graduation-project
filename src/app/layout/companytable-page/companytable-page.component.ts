import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { comapny } from './comapny';
import { UserStoreService } from '../user-store.service';
import { ActivatedRoute, Params } from '@angular/router';
import { reviews } from './reviews';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  Validators } from '@angular/forms';
import { services } from './services';
import { tableService } from './AdmainCompany.service';
//import { tableService } from './AdmainCompany.service';
@Component({
    selector: 'app-companytable-page',
    templateUrl: './companytable-page.component.html',
    styleUrls: ['./companytable-page.component.scss']
})
export class CompanytablePageComponent implements OnInit {
 
  myData: any[];
  searchText:any;
  searchname:any;

  constructor(private yara: tableService
      
      ) {


  }
  ngOnInit() {

      this.getdata();

  }

  

  getdata(){
//get all students
      this.yara.Getcompany().subscribe(x => {
          this.myData = x;})
  }//




  deleteCompany(id: number): void {
      this.yara.deleteCompany(id)
        .subscribe(
          () => {
            // تمت عملية الحذف بن
            window.location.reload();

            console.log('تم حذف البيانات بنجاح');
          },
          (error) => {
            // فشلت عملية الحذف
            console.error('خطأ: ' + error.message);
          }
        );
        window.location.reload();
    }
     
}




//AdmainCompany.service.ts