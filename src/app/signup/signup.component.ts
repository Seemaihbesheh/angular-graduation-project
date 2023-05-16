import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userr } from './userr';
import { AuthService } from '../layout/auth.service';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
   // userr: userr[];
    form: FormGroup;
    loading = false;
  
    btnLoader = false;
    
    constructor(
         private service: AuthService,
         private fb: FormBuilder,
         ) {}

    ngOnInit() {
        this.initForm();
    }



    submit():void {
        if (this.form.invalid) {
          this.loading = false;
          return;
        }
            this.btnLoader = true;
    
        this.loading = true;
        const formVal = Object.assign({}, this.form.value);
    
        this.signUpp();
      }
     
      private signUpp(): void {
        this.service.registernewUser(this.form.value).subscribe(
          res => {
            console.log("hi i'am call the cotrooler")
            this.handleSuccess();
            this.form.reset();
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
    
    
      initForm():void {
            this.form = this.fb.group({
              UserName: [null],
               FirstName : [null],
               LastName : [null],
               phoneNumber:  [null],
               City : [null],
               Bio : [null],
               State: [null],
               Email : [null],
               GPA : [null],
               Education : [null],
               password : [null],
               Role:[null]
                 //  Token:[null],
            });
        }
}
