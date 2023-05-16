import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthService } from '../layout/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserStoreService } from '../layout/user-store.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  loading = false;

  btnLoader = false;
  // type:string="password";
  form: FormGroup;



  public resetPasswordEmail!: string;
  
  public isValidEmail!: boolean;

  constructor(
    public router: Router,
    private auth: AuthService,
    private fb: FormBuilder,
    private userStore: UserStoreService
 
  ) { }



  ngOnInit() {
    this.initForm();
    
  }

 

  submit(): void {

    console.log("this is form value reom compnents");

    console.log(this.form.value);



    if (this.form.invalid) {
      this.loading = false;
      return;
    }
    this.btnLoader = true;

    this.loading = true;
    const formVal = Object.assign({}, this.form.value);

  this.signinUser();
    this.signincomapny();


  }



  private signincomapny(): void { 
   

    this.auth.signincompany(this.form.value).subscribe(
      res => {

      //  console.log("hiiii i am in function signin signin comapny"); 
           //   console.log("sign user and store the token");

            console.log(res.message);

        this.auth.storeToken(res.token);


        const tokenPayload = this.auth.decodedToken();

       this.userStore.setFullNameForStore(tokenPayload.unique_name)

        this.userStore.setRoleFromStore(tokenPayload.role);
        this.userStore.setEmailFromStore(tokenPayload.email);


        //    this.form.reset();

      // console.log(" company company company     token token token token token token token ");

        // // to store my token
       // this.auth.storeToken(res.token);
        console.log(res.token);


        this.handleSuccess();
      },
      err => {
        this.handleError(err.error);

      }
    );




  }

  private signinUser(): void {

    console.log("hiiii i am in function signinUser ");

    this.auth.signin(this.form.value).subscribe(
      res => {

        //        console.log("sign user and store the token");

        //        console.log(res.message);

        this.auth.storeToken(res.token);


        const tokenPayload = this.auth.decodedToken();

       this.userStore.setFullNameForStore(tokenPayload.unique_name)

        this.userStore.setRoleFromStore(tokenPayload.role);
        this.userStore.setEmailFromStore(tokenPayload.email);


        //    this.form.reset();

     //  console.log(" token111111111111111111 token token token token token token token ");

        // // to store my token
       // this.auth.storeToken(res.token);
        console.log(res.token);


        this.handleSuccess();
      },
      err => {
        this.handleError(err.error);

      }
    );
  }

  private handleSuccess(): void {
    this.loading = false;
  }

  private handleError(message?: string): void {
    this.loading = false;
  }



  initForm(): void {
    this.form = this.fb.group({
      UserName: ['', Validators.required],
      password: ['', Validators.required],

    });
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
     
     
                                          
      this.auth.resetPasswordLink("ihbsema@gmail.com")
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

