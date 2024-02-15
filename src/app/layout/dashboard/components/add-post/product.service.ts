import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { Status } from './models/status';
import { environment } from '../../../../../environments/environment';
import { without } from './without';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.baseUrl+'api/product';



  add(data:Product){
    let formData = new FormData();
    formData.append("productName",data.productName);
    formData.append("imageFile",data.imageFile??"");
    return this.http.post<Status>(this.baseUrl+'/add',formData);
  }

  add2(data:without){
    let formData = new FormData();
    
    return this.http.post<Status>(this.baseUrl+'/add2',formData);
  }

  getAll(){
    return this.http.get<Product[]>(this.baseUrl+'/getall');
  }
  
  constructor(private http:HttpClient) { }
}
