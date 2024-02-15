import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { comapny } from '../company-page/comapny';



@Component({
  selector: 'app-alllCom-page',
  templateUrl: './alllCom-page.component.html',
  styleUrls: ['./alllCom-page.component.scss']


})
export class  AlllComPageComponent implements OnInit {
  comapny2: comapny[];
  // constructor( private chatService :ChatService){}
  constructor(  private service: AuthService,) { }


  ngOnInit(): void {


    this.service.getAllCom().subscribe(data => {

     this.comapny2 = data;
     

     console.log("this.comapny2 from all ");
   console.log(this.comapny2);
   
  
 
   
    });

  }



  private getcompany(): void {

      
    var  idd =14;
  //  this.service.getbyid(idd).subscribe(data => {
      this.service.getAllCom().subscribe(data => {

     this.comapny2 = data;
     

     console.log("this.comapny2 from all ");
   console.log(this.comapny2);
   
  
 
   
    });
  }

}
