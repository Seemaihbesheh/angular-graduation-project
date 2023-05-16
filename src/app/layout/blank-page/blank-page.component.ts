import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';



//import {Statussss} from './company-page/Statussss'
import { Statussss } from '../company-page/Statussss';
import { comapny } from '../company-page/comapny';
import { MessageDto } from '../Dto/MessageDto';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-blank-page',
  templateUrl: './blank-page.component.html',
  styleUrls: ['./blank-page.component.scss']


})
export class BlankPageComponent implements OnInit {

  // constructor( private chatService :ChatService){}
  constructor(private chatService: ChatService) { }
  ngOnInit(): void {
    this.chatService.retrieveMappedObject().subscribe((receivedObj: MessageDto) => { this.addToInbox(receivedObj) });
  }
  msgDto: MessageDto = new MessageDto();
  msgInboxArray: MessageDto[] = [];

  send(): void {
    if (this.msgDto) {
      if (this.msgDto.user.length == 0 || this.msgDto.user.length == 0) {
        window.alert("Both fields are reuired");
        return;
      }
      else {
        this.chatService.broadcastMessage(this.msgDto);
      }
    }
  }
  addToInbox(obj: MessageDto) {
    let newObj = new MessageDto();
    newObj.user = obj.user;
    newObj.msgText = obj.msgText;
    newObj.date = new Date();
    this.msgInboxArray.push(newObj);
  }


}
