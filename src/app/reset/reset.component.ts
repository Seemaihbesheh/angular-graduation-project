import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthService } from '../layout/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserStoreService } from '../layout/user-store.service';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
  animations: [routerTransition()]
})
export class ResetComponent implements OnInit {

  numInputFields: number = 0;
  frm!: FormGroup;
  //status!:Statussss;
  
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




 




}

