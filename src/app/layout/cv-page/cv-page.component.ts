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
    private _AuthService: AuthService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {

    this.initForm();

    createPDF();
  }

  createPDF() {

    alert(" insideee and print consaol create pdf");
    var yaraaa = "yara";
    var users = [
      { name: "semayara11" }

    ];
    //   }


    // 👉️ input has type HTMLInputElement or null here
    //+"Email:"+

    



    var doc = new jsPDF();

// Set font styles
doc.setFont("helvetica", "bold");
doc.setFontSize(16);

const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;

// Create table for name and email
doc.setFillColor(230, 230, 230); // Set background color for the table header
doc.rect(20, 20, 170, 10, "F"); // Draw table header
doc.setTextColor(0, 0, 0); // Set text color for table header
doc.text("Name", 25, 25);
doc.text("Email", 85, 25);

doc.setTextColor(0, 0, 0); // Set text color for table content
doc.setFont("helvetica", "normal");
doc.rect(20, 30, 60, 10); // Draw table cell for name
doc.text(nameInput.value, 21, 35);
doc.rect(80, 30, 110, 10); // Draw table cell for email
doc.text(emailInput.value, 81, 35);

doc.setFont("helvetica", "bold");
doc.setFontSize(14);

const skillsInput = document.getElementById("skills") as HTMLInputElement;
const aboutMeInput = document.getElementById("aboutMe") as HTMLInputElement;
const universityMeInput = document.getElementById("university") as HTMLInputElement;
const languagesInput = document.getElementById("languages") as HTMLInputElement;
const phone_numberMeInput = document.getElementById("phone_number") as HTMLInputElement;
const gpaMeInput = document.getElementById("gpa") as HTMLInputElement;
const experienceYearMeInput = document.getElementById("experienceYear") as HTMLInputElement;

// Create table for skills, about me, university, languages, phone number, GPA, and experience year
// createTable(doc, 20, 50, "Skills", skillsInput.value);
createTable(doc, 20, 50, "GPA", gpaMeInput.value);
createTable(doc, 20, 75, "Experience Year", experienceYearMeInput.value);
createTable(doc, 20, 105, "University", universityMeInput.value);
createTable(doc, 20, 135, "Languages", languagesInput.value);
createTable(doc, 20, 155, "Phone Number", phone_numberMeInput.value);
createTable(doc, 20, 175, "Skills",skillsInput.value );
createTable(doc, 20, 195, "About Me", experienceYearMeInput.value);

doc.save('cv.pdf');

// Helper function to create a table cell with borders
function createTable(doc, x, y, header, content) {
  doc.setFillColor(230, 230, 230); // Set background color for the table header
  doc.rect(x, y, 170, 10, "F"); // Draw table header
  doc.setTextColor(0, 0, 0); // Set text color for table header
  doc.text(header, x + 5, y + 5);

  doc.setTextColor(0, 0, 0); // Set text color for table content
  doc.setFont("helvetica", "normal");
  doc.rect(x, y + 10, 170, 10); // Draw table cell
  doc.text(content, x + 5, y + 15);
}

















  }



  submit(): void {
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


  initForm(): void {
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

