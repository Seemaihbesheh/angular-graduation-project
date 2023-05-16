import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaDataService {

 
  constructor(private _HttpClient: HttpClient) {}

  getPizza():Observable<any>{
   return this._HttpClient.get("https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza")
  }

  /*
  export class tableService {
  private url = environment.apiBaseUrl + 'AttEmp';



  constructor(private http: HttpClient) { }

 

  getTable (): Observable<any[]> {
    return this.http.get<any[]> ( this.url , environment.httpOptions )
      

            }
            
   


}



}

   */

}
