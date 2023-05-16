import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Inject } from '@angular/core';
import jsPDF from 'jspdf';





declare function createPDF(): any;

@Component({
    selector: 'app-cv-page',
    templateUrl: './cv-page.component.html',
    styleUrls: ['./cv-page.component.scss']
})
export class CvPageComponent implements OnInit {


    btnLoader = false;
    form: FormGroup;
    loading = false;

    constructor(
        private _AuthService:AuthService,
        private fb: FormBuilder,
        ) {}

    ngOnInit() {

        this.initForm();
        
    createPDF();
    }

    createPDF(){

      alert(" insideee and print consaol create pdf");
      var yaraaa ="yara";
      var users =[
        {name:"semayara11"}
      
      ];
      //   }

      
      // 👉️ input has type HTMLInputElement or null here
      
      
      var doc = new jsPDF();
      
    
      doc.text("Name : seema                                    Email:s@gmail.com", 10, 15);
      doc.text("Languages:english                              University:najah", 10, 28);
      doc.text("Phone Number:11                               Gpa:1", 10, 36);
      
      
      doc.text("ExperienceYear : 1     ", 10, 47);
      doc.text("About Me : hello i am seema    ", 10, 54);
      
      doc.text("Skills: c,java   ", 10, 64);
      
    
      
        doc.save('cv.pdf');
      
      }
      
        
      
    submit():void {
        if (this.form.invalid) {
          this.loading = false;
          return;
        }
            this.btnLoader = true;
    
        this.loading = true;
        const formVal = Object.assign({}, this.form.value);
        this.addcv();
      
      }
      private addcv(): void {
        this._AuthService.addcv(this.form.value).subscribe(
          res => {
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
    
    
      initForm():void {
		this.form = this.fb.group({
			name: [null],
      email: [null],
      aboutMe: [null],
      skills: [null],
      languages: [null],
      gpa: [null],
      university: [null],
      phone_number: [null],
      experienceYear: [null],


    
      
		});
	}
    
   
}

