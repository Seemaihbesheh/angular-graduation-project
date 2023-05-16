import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tableService } from '../tables.service';
import { University } from './University';
import { gender } from './gender';


@Component({
  selector: 'app-daialogtable',
  templateUrl: './daialogtable.component.html',
  styleUrls: ['./daialogtable.component.css']
})
export class DaialogtableComponent {

  universities: University[];
  gender: gender[];
  form: FormGroup;
  loading = false;
  universityOptions: any[] = [];
  btnLoader = false;

  constructor(
    private service: tableService,
    private fb: FormBuilder,

  ) {}
  
  
  

  ngOnInit() {

   this.getUniversity();
    this.getgender();
		this.initForm();

  }

    private getUniversity(): void {
    this.service.getUniversity().subscribe(data => {
      this.universities = data;
      this.universityOptions = this.universities.map(u => ({ id: u.universityId, name: u.universityName }));

      
    });
  }

  private getgender(): void {
    this.service.getGender().subscribe(data => {
      this.gender = data;
    });
  }


  submit():void {
    if (this.form.invalid) {
      this.loading = false;
      return;
    }
		this.btnLoader = true;

    this.loading = true;
    const formVal = Object.assign({}, this.form.value);

    this.addEmployee();
  }
 
  private addEmployee(): void {
    this.service.addEmployee(this.form.value).subscribe(
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
			ages: [null],
      name: [null, [Validators.maxLength(250)]],
      universityId: [null, Validators.required],
      genderId: [null, Validators.required],
      
		});
	}

}