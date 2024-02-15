import { Component } from '@angular/core';
// import { ProductService } from 'src/app/services/product.service';
//import { FormBuilder, FormGroup, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { Product } from './models/product';
import { Status } from './models/status';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../auth.service';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['add-post.component.scss']
})
export class AddPostComponent {

//  form: FormGroup;
  form!: FormGroup;

  form2: FormGroup;
  // product:Product = {id:0,productName:'',productImage:''};
  imageFile?: File;
  status!: Status;
  constructor(private productService: ProductService,
        private service: AuthService,
    private fb: FormBuilder,
  ) { }

  get f() {
    return this.form.controls;
  }
  onPost() {
   // this.status = { statusCode: 0, message: 'wait..' };

    const frmData: Product = Object.assign(this.form.value);
    frmData.imageFile = this.imageFile;
    // we will call our service, and pass this object to it
    this.productService.add(frmData).subscribe({
      next: (res) => {
        this.status = res;
      },
      error: (err) => {
        // this.status = { statusCode: 0, message: 'Error on server side' }
        console.log(err);
      }
    })





    const formVal2 = Object.assign({}, this.form2.value);

    this.postform();

  }
  private postform(): void {
    this.service.postContent(this.form2.value).subscribe(
      res => {
        console.log("hi i'am call the content form");
        console.log("hi i'am call the content form") ;
        console.log("hi i'am call the content form ");
       
        this.form2.reset();
      },
      err => {
       
      }
    );
  }
  onChange(event: any) {
    this.imageFile = event.target.files[0];
  }
  initForm():void {
    this.form2 = this.fb.group({
      text: [null],
   
    });
}
  ngOnInit(): void {
    this.form = this.fb.group({
      'id': [0],
      'productName': ['', Validators.required],
      'imageFile': []
      

    })

    this.initForm();
  }
}

