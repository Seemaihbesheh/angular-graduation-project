


import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class tableService {
  private url = environment.apiBaseUrl + 'AttEmp';


  constructor(private http: HttpClient) { }


//get all students//main class of get

  getTable(): Observable<any[]> {
    return this.http.get<any[]>(this.url, environment.httpOptions)
  }

  getUniversity(): Observable<any> {
    return this.http.get<any>(`${this.url}/Getuniversity`, environment.httpOptions);
  }

  getGender(): Observable<any> {
    return this.http.get<any>(`${this.url}/Gender`, environment.httpOptions);
  }
 

  addEmployee(data: any): Observable<any> {
    debugger
    return this.http.post(`${this.url}`, data, environment.httpOptions);
    
	}

 

}