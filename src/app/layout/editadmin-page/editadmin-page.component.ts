import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


//import {Statussss} from './company-page/Statussss'
import { Statussss } from '../company-page/Statussss';
import { comapny } from '../company-page/comapny';
import { admin } from '../admin';
@Component({
    selector: 'app-editcompany-page',
    templateUrl: './editadmin-page.component.html',
    styleUrls: ['./editadmin-page.component.scss']
})


export class EditadminPageComponent implements OnInit {
  
    numInputFields: number = 0;
    frm!:FormGroup;
    status!:Statussss;
    admin2: admin[];

    get f(){
        return this.frm.controls; //will be used in validation
      }
    

      constructor(private fb:FormBuilder, private service: AuthService,) { 
       this.getcom();
      }
    


      getcom(){
        const id=1;
        if(id ==1){
            this.service.getByIdadmiiin(id).subscribe(
            {
              next:(res)=>{
                this.frm.patchValue(res);   
               // console.log("hi im in  getById getById getById ");
               // console.log();
               this.getcompanyid();

              },
              error:(err)=>{
                console.log(err); 
              }
            }
          );
        }

        
      }


      private getcompanyid(): void {
        var  idd =1;
        this.service.getbyidadminnnn(idd).subscribe(data => {
         this.admin2 = data;
         
  
         console.log("this.admin2");         console.log("this.admin2");
         console.log("this.admin2");

       console.log(this.admin2);
       
  
       
        });
      }
      


      onPost(){
        this.status={statusCode:0,message:'wait..'};
        this.service.addUpdateaddmin(this.frm.value).subscribe({
          next:(res)=>{
            this.status=res;
            
             // this.frm.reset();
        this.getcom();
          },
          error:(err)=>{
            console.log(err); 
          }
        })
      }


      funform() {
        this.frm= this.fb.group({
          id:[0],
          name: [null],
          phoneNumber : [null],
          email : [null],
          password: [null],
          about : [null],
          address: [null],
          languages: [null]
         // 'id':[0],
          //'name':['',Validators.required]
        })

      }

      ngOnInit(){
        this.funform();

      }
    //  this.funform();

   
 
      

}
