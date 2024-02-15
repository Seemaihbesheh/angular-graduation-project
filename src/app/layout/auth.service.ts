import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ResetPassword } from '../reset-password.module';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AppyJob } from './applyJob-page/AppyJob';
import { Status } from './dashboard/components/add-post/models/status';
import { comapny } from './company-page/comapny';
import {Statussss} from './company-page/Statussss'
import { userr } from './employee-page/userr';
import { admin } from './admin';
import { approv } from './applyJob-page/approv';

import {  HttpHeaders } from '@angular/common/http';
import { reject } from './applyJob-page/reject';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  // private url = environment.apiBaseUrl + 'forjob';
  private url_job = environment.apiBaseUrl + 'forjob';
  private url_applyjob = environment.apiBaseUrl + 'forApplyjob';
  private url_cv = environment.apiBaseUrl + 'cvv';

  private url_userUs = environment.apiBaseUrl + 'userUs';
  private baseUrl = environment.apiBaseUrl + 'signup';

  private attempURL = environment.apiBaseUrl + 'AttEmp';
private updateURL = environment.apiBaseUrl + 'update';
private skillProjectURL = environment.apiBaseUrl + 'SkillandProject';
  
  private userPayload: any;




  constructor(private http: HttpClient) {


    this.userPayload = this.decodedToken();
  }





  decodedToken() {
    const jwtHelpaer = new JwtHelperService();
    const token = this.getToken();
    console.log(" we are  in decodedToken and get token ");

    console.log(jwtHelpaer.decodeToken(token)); //this return the same thing when i search "jwt"and got token
    return jwtHelpaer.decodeToken(token);
  }





////////////////////////////////////////
//company
  addUpdate(category:comapny){
    return this.http.post<Statussss>(`${this.updateURL}/update`, category, environment.httpOptions);

   }

   addUpdateaddmin(category:admin){
    return this.http.post<Statussss>(`${this.updateURL}/updateadmiiin`, category, environment.httpOptions);

   }




   
 

//// insted company
   addUpdateuser(category:userr){
    return this.http.post<any>(`${this.updateURL}/updateuser`, category, environment.httpOptions);

   }


   //GetAllCom
   
   getAllCom(){
    return this.http.get<any>(`${this.attempURL}/GetAllCom`, environment.httpOptions);
   
   }




   getallUseru(){
    return this.http.get<any>(`${this.url_userUs}`, environment.httpOptions);
   
   }

 
//comapny
   getByIdcom(id:number){
    return this.http.get<any>(`${this.updateURL}/getcopmanyprofileid/${id}`, environment.httpOptions);
   }
   getByIdadmiiin(id:number){
    return this.http.get<any>(`${this.updateURL}/getadmiiinnprofileid/${id}`, environment.httpOptions);
   }






   getByIdcuser(id:number){
    return this.http.get<any>(`${this.updateURL}/getuserprofileid/${id}`, environment.httpOptions);
   }
   


  //company
   getAll(){
    return this.http.get<comapny[]>(this.updateURL+'/getall');
   }



//company
   getbyid(id:number){
    return this.http.get<any>(`${this.attempURL}/getcopmanyID/${id}`, environment.httpOptions);
   
   }


   getbyidadminnnn(id:number){
    return this.http.get<any>(`${this.attempURL}/getadmminID/${id}`, environment.httpOptions);
   
   }



   getadminbyid(id:number){
    return this.http.get<any>(`${this.attempURL}/getadminID/${id}`, environment.httpOptions);
   
   }

  

   //GetapplyJob
   
   
   getuserbyid(id:number){
     return this.http.get<any>(`${this.attempURL}/getuserID/${id}`, environment.httpOptions);
    
    }
     
   getSkilss(){
    return this.http.get<any>(`${this.skillProjectURL}/Getskill`, environment.httpOptions);
   
   }
   
   getproject(){
    return this.http.get<any>(`${this.skillProjectURL}/Getproject`, environment.httpOptions);
   
   }
   
   getservice(){
    return this.http.get<any>(`${this.skillProjectURL}/Getservice`, environment.httpOptions);
   
   }
   
   getreview(){
    return this.http.get<any>(`${this.skillProjectURL}/Getreview`, environment.httpOptions);
   
   }


   
   getcomment(){
    return this.http.get<any>(`${this.attempURL}/GetpushCommentPost`, environment.httpOptions);
   
   }
   
   //
   registernewreview(reviewUobj: any) {

    return this.http.post<any>(`${this.skillProjectURL}/pushreviews`, reviewUobj, environment.httpOptions);

  }

  registernewrCOMMENT(commUobj: any) {

    return this.http.post<any>(`${this.attempURL}/pushCommentPost`, commUobj, environment.httpOptions);

  }


  
  resetPasswordLink(email: string) {
    return this.http.post<any>(`${this.baseUrl}/send-reset-email/${email}`, {});


  }


    
  acceptEmail(email: string) {
    return this.http.post<any>(`${this.baseUrl}/send-accept-email/${email}`, {});


  }
//  deleteEmail(email: string) {
//     return this.http.post<any>(`${this.baseUrl}/send-delete-email/${email}`, {});


//   }



  resetPassword(resetPasswordObj: ResetPassword) {
    return this.http.post<any>(`${this.baseUrl}/reset-password`, resetPasswordObj);

  }











  getfullNameFromTken(){
    if(this.userPayload)
    return this.userPayload.unique_name;
  }


  getRoleFromTken(){
    if(this.userPayload)
    return this.userPayload.role;
  }

  getEmailFromTken(){
    if(this.userPayload)
    return this.userPayload.email;
  }

  getIdFromTken(){
    if(this.userPayload)
    return this.userPayload.nameid;
  }




  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue)
  }


  getToken() {
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token')

    //check if there atr token then send true 
  }




  postComment(cmmentUobj: any) {

    return this.http.post<any>(`${this.attempURL}/pushCommentPost`, cmmentUobj, environment.httpOptions);

  }


//GetpushContent

getpushComment(): Observable<any> {
  return this.http.get<any>(`${this.attempURL}/GetpushCommentPost`, environment.httpOptions);

  
}















  postContent(contentUobj: any) {

    return this.http.post<any>(`${this.attempURL}/pushContent`, contentUobj, environment.httpOptions);

  }


//GetpushContent

getpushContent(): Observable<any> {
  return this.http.get<any>(`${this.attempURL}/GetpushContent`, environment.httpOptions);

  
}



  registernewUser(userUobj: any) {

    return this.http.post<any>(`${this.baseUrl}/register`, userUobj, environment.httpOptions);

  }

  registernewskill(skillUobj: any) {

    return this.http.post<any>(`${this.skillProjectURL}/pushSkill`, skillUobj, environment.httpOptions);

  }

 getapprove(){
  return this.http.get<any>(`${this.skillProjectURL}/Getapprove`, environment.httpOptions);
   
}

// postApprov(approvData: any): Observable<any> {
//   const headers = new HttpHeaders().set('Content-Type', 'application/json');
//   return this.http.post<any>(`${this.apiUrl}/PostApprov`, approvData, { headers });
// }

// postapprove(approveOBJ: any) {

//   return this.http.post<any>(`${this.skillProjectURL}/pushApprove`, approveOBJ, environment.httpOptions);

// }




postData(data: approv): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  return this.http.post<any>(`${this.skillProjectURL}/pushApprove`, data,  { headers });
}



postDataReject(data: reject): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  return this.http.post<any>(`${this.skillProjectURL}/pushReject`, data,  { headers });
}



  registernewproject(projectobj: any) {

    return this.http.post<any>(`${this.skillProjectURL}/pushProject`, projectobj, environment.httpOptions);

  }




  registernewservice(serviceobj: any) {

    return this.http.post<any>(`${this.skillProjectURL}/pushService`, serviceobj, environment.httpOptions);

  }

  
  registernewcompany(companyobj: any) {

    //debugger
    return this.http.post<any>(`${this.baseUrl}/registercompany`, companyobj, environment.httpOptions);

  }

  

  signin(loginUobj: any) {


    return this.http.post<any>(`${this.baseUrl}/authenticate`, loginUobj, environment.httpOptions);

  }


  signincompany(loginUobj: any) {


    return this.http.post<any>(`${this.baseUrl}/authenticateCompany`, loginUobj, environment.httpOptions);

  }


  //user
  register(user: any): Observable<any> {
    return this.http.post("https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup", user)
  }



  getTable(): Observable<any[]> {
    return this.http.get<any[]>(this.url_job, environment.httpOptions)
  }





//test by him
  // getApplyJob(searchValue: string): Observable<any> {
  //   const search = searchValue ?? "";
  //   return this.http.get<any>(`${this.url_applyjob}/GetapplyJob?searchValue=${search}`, environment.httpOptions);


    
  // }


  // getApplyJob(): Observable<any> {

  //   return this.http.get<any>(`${this.url_applyjob}/getallApplyjob`, environment.httpOptions);

  // }






getapproved(): Observable<any> {
  return this.http.get<any>(`${this.skillProjectURL}/Getapprove`, environment.httpOptions);

  
}

getrejected(): Observable<any> {
  return this.http.get<any>(`${this.skillProjectURL}/Getreject`, environment.httpOptions);

  
}





getApplyJob(): Observable<any> {
  return this.http.get<any>(`${this.url_applyjob}/GetapplyJob`, environment.httpOptions);

  
}
//getallJobApply/email


getApplyJobByid(id:number){
  return this.http.get<any>(`${this.url_applyjob}/GetapplyJob/${id}`, environment.httpOptions);
 
 }
  

 
 getpushJobByIdComapny(id:number){
  return this.http.get<any>(`${this.url_applyjob}/GetpushJobIdCompany/${id}`, environment.httpOptions);
 
 }
  

 getapplyJobUser(email:string){
  return this.http.get<any>(`${this.url_applyjob}/GetapplyJobUser/${email}`, environment.httpOptions);
 
 }
 


  
// searchApplyJob(searchh:string){
//    return this.http.get<any>(`${this.url_applyjob}/GetapplyJob/${searchh}`, environment.httpOptions);
 
//   }

searchbycomapnyrequirment(searchh:string){
  return this.http.get<any>(`${this.url_applyjob}/GetpushJobCompanyrequirment/${searchh}`, environment.httpOptions);

 }
searchbycomapnyEmail(searchh:string){
  return this.http.get<any>(`${this.url_applyjob}/GetpushJobCompanyemail/${searchh}`, environment.httpOptions);

 }
searchbyTitle(searchh:string){
  return this.http.get<any>(`${this.url_applyjob}/GetpushJobTitle/${searchh}`, environment.httpOptions);

 }

  searchbyName(searchh:string){
    return this.http.get<any>(`${this.url_applyjob}/GetapplyJobName/${searchh}`, environment.httpOptions);
  
   }
 

   
  searchbyEmail(searchh:string){
    return this.http.get<any>(`${this.url_applyjob}/GetapplyJobEmail/${searchh}`, environment.httpOptions);
  
   }
 
   
  searchbyCity(searchh:string){
    return this.http.get<any>(`${this.url_applyjob}/GetapplyJobCity/${searchh}`, environment.httpOptions);
  
   }
   
   letsSearch(searchh:string){
    return this.http.get<any>(`${this.url_applyjob}/GetapplyJobssBySearch/${searchh}`, environment.httpOptions);
  
   }
  searchbyCv(searchh:string){
    return this.http.get<any>(`${this.url_applyjob}/GetapplyJobCv/${searchh}`, environment.httpOptions);
  
   }
 

  
  //attempURL
  getcompany(): Observable<any> {
    return this.http.get<any>(`${this.attempURL}/Getcompany`, environment.httpOptions);
  }

  getpushJob(): Observable<any> {
    return this.http.get<any>(`${this.url_applyjob}/GetpushJob`, environment.httpOptions);
  }



  getAllusers(): Observable<any> {
    return this.http.get<any>(`${this.url_applyjob}/GetpushJob`, environment.httpOptions);
  }





  addcv(data: any): Observable<any> {
  
    return this.http.post(`${this.url_cv}`, data, environment.httpOptions);

  }



  addpushjobs(data: any): Observable<any> {
    
    return this.http.post(`${this.attempURL}/pushJobss`, data, environment.httpOptions);
   

  }


  //   adduser(data: any): Observable<any> {
  //     debugger
  //     return this.http.post(`${this.url_userUs}`, data, environment.httpOptions);
  //     
  // 	}




  add(data:AppyJob){
    let formData = new FormData();
    formData.append("full_Name",data.full_Name);
    formData.append("email",data.email);
    formData.append("phone_Number",data.phone_Number.toString());
    formData.append("gPA",data.gPA.toString());
    formData.append("city",data.city);

    formData.append("pushJobId",data.pushJobId.toString());
    formData.append("imageFile",data.imageFile??"");
    return this.http.post<Status>(this.url_applyjob+'/apply',formData);
  
  }


  
//  [HttpGet("PdfSearch/{searchValue}")]
searchPDF(searchh:string){
  return this.http.get<any>(`${this.url_applyjob}/PdfSearch/${searchh}`, environment.httpOptions);

 }



//  decodedToken() {
//   const jwtHelpaer = new JwtHelperService();
//   const token = this.getToken();
//   console.log(" we are  in decodedToken and get token ");

//   console.log(jwtHelpaer.decodeToken(token)); //this return the same thing when i search "jwt"and got token
//   return jwtHelpaer.decodeToken(token);
// }





// ////////////////////////////////////////
// //company
// addUpdate(category:comapny){
//   return this.http.post<Statussss>(`${this.updateURL}/update`, category, environment.httpOptions);

//  }

//  addUpdateaddmin(category:admin){
//   return this.http.post<Statussss>(`${this.updateURL}/updateadmiiin`, category, environment.httpOptions);

//  }



// //// insted company
//  addUpdateuser(category:userr){
//   return this.http.post<any>(`${this.updateURL}/updateuser`, category, environment.httpOptions);

//  }


//comapny
//  getByIdcom(id:number){
//   return this.http.get<any>(`${this.updateURL}/getcopmanyprofileid/${id}`, environment.httpOptions);
//  }
//  getByIdadmiiin(id:number){
//   return this.http.get<any>(`${this.updateURL}/getadmiiinnprofileid/${id}`, environment.httpOptions);
//  }






//  getByIdcuser(id:number){
//   return this.http.get<any>(`${this.updateURL}/getuserprofileid/${id}`, environment.httpOptions);
//  }
 


// //company
//  getAll(){
//   return this.http.get<comapny[]>(this.updateURL+'/getall');
//  }



// //company
//  getbyid(id:number){
//   return this.http.get<any>(`${this.attempURL}/getcopmanyID/${id}`, environment.httpOptions);
 
//  }


//  getbyidadminnnn(id:number){
//   return this.http.get<any>(`${this.attempURL}/getadmminID/${id}`, environment.httpOptions);
 
//  }



//  getadminbyid(id:number){
//   return this.http.get<any>(`${this.attempURL}/getadminID/${id}`, environment.httpOptions);
 
//  }



 
 
 
//  getuserbyid(id:number){
//    return this.http.get<any>(`${this.attempURL}/getuserID/${id}`, environment.httpOptions);
  
//   }
  


// ////////////////////////
// //




// resetPasswordLink(email: string) {
//   return this.http.post<any>(`${this.baseUrl}/send-reset-email/${email}`, {});


// }

// resetPassword(resetPasswordObj: ResetPassword) {
//   return this.http.post<any>(`${this.baseUrl}/reset-password`, resetPasswordObj);

// }





// getfullNameFromTken(){
//   if(this.userPayload)
//   return this.userPayload.unique_name;
// }


// getRoleFromTken(){
//   if(this.userPayload)
//   return this.userPayload.role;
// }

// getEmailFromTken(){
//   if(this.userPayload)
//   return this.userPayload.email;
// }

// getIdFromTken(){
//   if(this.userPayload)
//   return this.userPayload.nameid;
// }




// storeToken(tokenValue: string) {
//   localStorage.setItem('token', tokenValue)
// }


// getToken() {
//   return localStorage.getItem('token')
// }

// isLoggedIn(): boolean {
//   return !!localStorage.getItem('token')

//   //check if there atr token then send true 
// }



// registernewUser(userUobj: any) {

//   return this.http.post<any>(`${this.baseUrl}/register`, userUobj, environment.httpOptions);

// }

// registernewcompany(companyobj: any) {

  
//   return this.http.post<any>(`${this.baseUrl}/registercompany`, companyobj, environment.httpOptions);

// }




// signin(loginUobj: any) {


//   return this.http.post<any>(`${this.baseUrl}/authenticate`, loginUobj, environment.httpOptions);

// }


// signincompany(loginUobj: any) {


//   return this.http.post<any>(`${this.baseUrl}/authenticateCompany`, loginUobj, environment.httpOptions);

// }


// //user
// register(user: any): Observable<any> {
//   return this.http.post("https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup", user)
// }



// getTable(): Observable<any[]> {
//   return this.http.get<any[]>(this.url_job, environment.httpOptions)
// }


// getApplyJob(): Observable<any> {
//   return this.http.get<any>(`${this.url_applyjob}/GetapplyJob`, environment.httpOptions);


  
// }


// //attempURL
// getcompany(): Observable<any> {
//   return this.http.get<any>(`${this.attempURL}/Getcompany`, environment.httpOptions);
// }

// getpushJob(): Observable<any> {
//   return this.http.get<any>(`${this.url_applyjob}/GetpushJob`, environment.httpOptions);
// }



// getAllusers(): Observable<any> {
//   return this.http.get<any>(`${this.url_applyjob}/GetpushJob`, environment.httpOptions);
// }





// addcv(data: any): Observable<any> {
  
//   return this.http.post(`${this.url_cv}`, data, environment.httpOptions);

// }



// addpushjobs(data: any): Observable<any> {
  
//   return this.http.post(`${this.attempURL}/pushJobss`, data, environment.httpOptions);
 

}


//   adduser(data: any): Observable<any> {
//     debugger
//     return this.http.post(`${this.url_userUs}`, data, environment.httpOptions);
//     
// 	}










// add(data:AppyJob){
//   let formData = new FormData();
//   formData.append("full_Name",data.full_Name);
//   formData.append("email",data.email);
//   formData.append("phone_Number",data.phone_Number.toString());
//   formData.append("gPA",data.gPA.toString());
//   formData.append("city",data.city);

//   formData.append("pushJobId",data.pushJobId.toString());
//   formData.append("imageFile",data.imageFile??"");
//   return this.http.post<Status>(this.url_applyjob+'/apply',formData);}


  // addjob(data:Createjob){
  //   let formData = new FormData();
  //   formData.append("pre_title",data.pre_title);
  //   formData.append("title",data.title);
  //   formData.append("description",data.description);
  //   formData.append("requrment",data.requrment);
  //   formData.append("email",data.email);

  //   formData.append("place",data.place);
    
  //   formData.append("job_Deadline",data.job_Deadline.toString());
  //   formData.append("company_id",data.company_id.toString());


  //   return this.http.post<Status>(this.url_applyjob+'/jobs',formData);}







