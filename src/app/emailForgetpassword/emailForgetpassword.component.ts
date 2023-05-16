import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthService } from '../layout/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserStoreService } from '../layout/user-store.service';
@Component({
  selector: 'app-emailForgetpassword',
  templateUrl: './emailForgetpassword.component.html',
  styleUrls: ['./emailForgetpassword.component.scss'],
  animations: [routerTransition()]
})
export class EmailForgetpasswordComponent implements OnInit {

  numInputFields: number = 0;
  frm!: FormGroup;
  //status!:Statussss;
  

  public resetPasswordEmail!: string;
  
  public isValidEmail!: boolean;
  get f() {
    return this.frm.controls; //will be used in validation
  }


  public id_login: Number = 0;


  public hide: boolean =false;

  constructor(private fb: FormBuilder, private service: AuthService, private userStore: UserStoreService) {
   
  }





 



  onPost() {
    //this.status={statusCode:0,message:'wait..'};
    this.service.addUpdateuser(this.frm.value).subscribe({
      next: (res) => {
        //this.status=res;
     console.log(" now in we are in reset password for user  function ");
        // this.frm.reset();
      
      },
      error: (err) => {
        console.log(err);
      }
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
        console.log("we are in reset");

        console.log(this.id_login);
    })




    
   
  }








  funform() {
    this.frm = this.fb.group({
      id: [0],
      password: [null],
  
    })

  }




  
  showPass() {
    // console.log(this.myVariable);
    this.hide=true;
  }




  checkvalidEmail(event: string) {
    const value = event;
    //const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2.3}$/; //check if this email or not
    //this.isValidEmail = pattern.test[value];
   this.isValidEmail = true;
    return this.isValidEmail;
  }






  confirmTosend() {
    if (this.checkvalidEmail(this.resetPasswordEmail)) {
       console.log("print email in confirmTosend");
       console.log(this.resetPasswordEmail);
     
     
                                          
      this.service.resetPasswordLink("ihbsema@gmail.com")
        .subscribe({
          next: (res) => {
            console.log("print email in resetPasswordLink resetPasswordLink ");
            console.log("sucessssss  inside  resetPasswordLink and  ");
       
            this.resetPasswordEmail ="";
         //   const buttontoRef = document.getElementById("closrbtn")
          //  buttontoRef?.click();
          },
          error: (err) => {
            console.log("errorrr inside  resetPasswordLink inside  resetPasswordLink   ");
    


          }
        })
    }
  }


}

