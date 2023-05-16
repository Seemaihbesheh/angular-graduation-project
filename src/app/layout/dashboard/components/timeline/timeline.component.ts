import { Component, OnInit } from '@angular/core';
// import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from '../add-post/models/status';
// import { ProductService } from './product.service';
import { Product } from '../add-post/models/product';
import { environment } from '../../../../../environments/environment';
import { ProductService } from '../add-post/product.service';
@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent  implements OnInit{
    products:Product[];
    imageBaseUrl=environment.baseUrl+'resources/';

    constructor(private productService:ProductService   ) { }



    getProducts(){
      this.productService.getAll().subscribe({
        next:(resp)=>{
          this.products=resp;
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }



    ngOnInit(): void {
      this.getProducts();



    }




  
  }

