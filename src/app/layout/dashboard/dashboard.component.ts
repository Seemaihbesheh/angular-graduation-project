import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AuthService } from '../auth.service';
//import {UserStoreService} from 'src/app/layout/user-store.service';
import { UserStoreService } from '../user-store.service'
import { ChatService } from '../chat.service';
//import { MessageDto } from '../Dto/MessageDto';
import { MessageDto } from '../Dto/MessageDto';
import { userr } from './userr';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];


    all: string = "../../assets/img/all.png";
    apply: string = "../../assets/img/apply.png";
    logo_post: string = "../../assets/img/post.png";
    cv: string = "../../assets/img/cv.jpg";
    job_logo: string = "../../assets/img/logo_jobs.jpg";

    offer: string = "../../assets/img/offer.jfif";
    logosrc: string = "../../assets/img/logo.jfif";
    jobs: string = "../../assets/img/jobs.jpg";
    public sliders: Array<any> = [];

    user: userr[];
    username: userr[];

    public tokenName: string = "";

    public email: string = "";
    public role: string = "";

    public id_login: Number = 0;


    constructor(private auth: AuthService,private chatService :ChatService, private userStore: UserStoreService) {
        this.sliders.push(
            {
                imagePath: 'assets/images/pexels-andrea-piacquadio-3756679.jpg',
                label: 'First slide label',
                text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/pexels-andrea-piacquadio-3778966.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

            },
            {
                imagePath: 'assets/images/pexels-cottonbro-studio-5989925.jpg',
                label: 'Third slide label',
                text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }


    

    ngOnInit() {



        this.chatService.retrieveMappedObject().subscribe((receivedObj: MessageDto) => { this.addToInbox(receivedObj) });





        this.userStore.getIdFromStore()
        .subscribe(val => {
            //console.log(" now in getRoleFromStore function ");


            let fulllidFromToken = this.auth.getIdFromTken();// string


            var numberValue = Number(fulllidFromToken);

            this.id_login = val || numberValue
            console.log("user data 'idd' whose login  form dashbored ");

            console.log(this.id_login);
        })


     

        this.userStore.getFullNameFromStore()
            .subscribe(val => {

            //    console.log(" nnnnnnnnnnow in getFullNameFromStore function ");

            //  let fulllNameFromToken = this.auth.getRoleFromTken();


              let fulllNameFromToken = this.auth.getfullNameFromTken();

                this.tokenName = val || fulllNameFromToken
                console.log("name from token is");

                console.log(this.tokenName);



            })




            this.userStore.getEmailFromStore()
            .subscribe(val => {
              //  console.log(" now in getFullemailFromStore function ");


                let fulllemailFromToken = this.auth.getEmailFromTken();

                this.email = val || fulllemailFromToken
                console.log("user data 'email' whose login");

                console.log(this.email);
            })



            ///////
            this.userStore.getRoleFromStore()
            .subscribe(val => {
                //console.log(" now in getRoleFromStore function ");


                let fulllroleFromToken = this.auth.getRoleFromTken();

                this.role = val || fulllroleFromToken
                console.log("user data 'role' whose login");

                console.log(this.role);
            })


            

            

            this.getuserid();
this.getuserss();

    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);



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
    addToInbox(obj:MessageDto){
        let newObj=new MessageDto();
        newObj.user=obj.user;
        newObj.msgText=obj.msgText;
        newObj.date=new Date();
        this.msgInboxArray.push(newObj);    
      }
     







      private getuserid(): void {
        // var  idd =60;
        //        this.service.getuserbyid(idd).subscribe(data => {
 
         this.auth.getuserbyid((this.id_login.valueOf())).subscribe(data => {
          this.user = data;      
          console.log(this.user);console.log(this.user);console.log(this.user);console.log(this.user);
         });
       }
 
       private getuserss(): void {
        // var  idd =60;
        //        this.service.getuserbyid(idd).subscribe(data => {
 
         this.auth.getallUseru().subscribe(data => {
          this.username = data;      
          console.log(this.user);
         });
       }
//
       
}


