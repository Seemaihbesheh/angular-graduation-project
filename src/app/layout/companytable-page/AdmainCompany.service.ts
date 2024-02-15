




import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class tableService {
  private url = environment.apiBaseUrl + 'AdmainCompanyTable';


  constructor(private http: HttpClient) { }


//get all students//main class of get

Getcompany(): Observable<any[]> {
    return this.http.get<any[]>(this.url, environment.httpOptions)
  }


  Getchart(): Observable<any> {
    return this.http.get<any>(`${this.url}/GetChat`, environment.httpOptions);
    debugger
  }

  // deleteCompany(id: number) {
  //   const url = `${this.url}/${id}`;

  //   return this.http.delete(url);
  // }

 

/*  deleteCompany(id:number): Observable<any> {
    return this.http.delete(this.url+'/' +id);
    debugger
  }*/


 deleteCompany(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }
 

}