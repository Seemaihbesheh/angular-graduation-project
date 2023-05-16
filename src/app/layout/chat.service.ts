import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';          // import signalR
import { Observable,Subject } from 'rxjs';
import { MessageDto } from './Dto/MessageDto';
//import { Subject } from '@microsoft/signalr';
import { HttpClient } from '@angular/common/http';
//import { Subject } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
// import { environment } from 'src/environments/environment';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  private  connection: any = new signalR.HubConnectionBuilder().withUrl(environment.hubConnectionURL,{
                                                                     skipNegotiation: true,
                                                                     transport: signalR.HttpTransportType.WebSockets
                                                             })   // mapping to the chathub as in startup.cs
                                        .configureLogging(signalR.LogLevel.Information)
                                        .build();
                                      
  readonly POST_URL = environment.broadcastURL;


 private receivedMessageObject: MessageDto = new MessageDto();
 private sharedObj = new Subject<MessageDto>();

 constructor(private http: HttpClient) { 
   this.connection.onclose(async () => {
     await this.start();
   });
  this.connection.on("ReceiveOne", (user: string, message: string) => { this.mapReceivedMessage(user, message); });
  this.start();                 
 }


 // Start the connection
 public async start() {
   try {
     await this.connection.start();
     console.log("connected");
   } catch (err) {
     console.log(err);
     setTimeout(() => this.start(), 5000);
   } 
 }

 private mapReceivedMessage(user: string, message: string): void {
   this.receivedMessageObject.user = user;
   this.receivedMessageObject.msgText = message;
   this.sharedObj.next(this.receivedMessageObject);
}



 // Calls the controller method
 public broadcastMessage(msgDto: any) {
   this.http.post(this.POST_URL, msgDto).subscribe(data => console.log(data));   
 }

 public retrieveMappedObject(): Observable<MessageDto> {
   return this.sharedObj.asObservable();
 }


}
