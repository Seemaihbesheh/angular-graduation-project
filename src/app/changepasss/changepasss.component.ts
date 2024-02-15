import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthService } from '../layout/auth.service';
import { FormBuilder, FormGroup, Validators,AbstractControl  } from '@angular/forms';

import { UserStoreService } from '../layout/user-store.service';
@Component({
  selector: 'app-changepasss',
  templateUrl: './changepasss.component.html',
  styleUrls: ['./changepasss.component.scss'],
  animations: [routerTransition()]
})
export class ChangepasssComponent implements OnInit {

  numInputFields: number = 0;
  frm!: FormGroup;
  //status!:Statussss;
  
  get f() {
    return this.frm.controls; //will be used in validation
  }
  passwordMatchError: boolean = false;

  passwordMatchgreen: boolean = true;
  public id_login: Number = 0;

  passwordMismatch: boolean ;
  public hide: boolean =false;

  constructor(private fb: FormBuilder, private service: AuthService, private userStore: UserStoreService) {
   
  }


  passwordMatchValidator(control: AbstractControl): { [key: string]: any } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password.value !== confirmPassword.value) {
      return { 'mismatch': true };
    }

    return null;
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
      password: ['', Validators.required],
      
      confirmpassword: ['', Validators.required],
    })

  }




  submitForm() {
    if (this.frm.valid) {
      const password = this.frm.get('password').value;
      const confirmPassword = this.frm.get('confirmpassword').value;

      if (password === confirmPassword) {
        this.passwordMatchError = false;
       this.passwordMatchgreen=false;
        console.log('Passwords match');

      } 
     else {
      this.passwordMatchError = true;
   
  
    }
  }
  }

  
  showPass() {
    // console.log(this.myVariable);
    this.hide=true;
  }





}

