import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { userr } from './userr';
import { UserStoreService } from '../user-store.service';


@Component({
  selector: 'app-editemployee-page',
  templateUrl: './editemployee-page.component.html',
  styleUrls: ['./editemployee-page.component.scss']
})


export class EditemployeePageComponent implements OnInit {
  form: FormGroup;
  form2: FormGroup;

  numInputFields: number = 0;
  frm!: FormGroup;
  //status!:Statussss;
  user2: userr[];
  get f() {
    return this.frm.controls; //will be used in validation
  }


  public id_login: Number = 0;



  constructor(private fb: FormBuilder, private service: AuthService, private userStore: UserStoreService) {
   
  }



  getuser() {
   // const id = 60;
    
      this.service.getByIdcuser(this.id_login.valueOf()).subscribe(
        {
          next: (res) => {
            this.frm.patchValue(res);
            // console.log("hi im in  getById getById getById ");
            // console.log();
            this.getuserid();

          },
          error: (err) => {
            console.log(err);
          }
        }
      );
   


  }


  private getuserid(): void {
    //var idd = 60;


    this.service.getuserbyid(this.id_login.valueOf()).subscribe(data => {
      this.user2 = data;


      console.log("this.user2");
      console.log(this.user2);



    });
  }




  submit():void {
   
    const formVal = Object.assign({}, this.form.value);

    this.signUpp();
  }
 /////////////////////////////////////////////////////////////////
  private signUpp(): void {
    this.service.registernewskill(this.form.value).subscribe(
      res => {
        console.log("hi i'am call the cotrooler")
       
        this.form.reset();
      },
      err => {
      
      }
    );
  }


  submit2():void {
   
    const formVal2 = Object.assign({}, this.form2.value);

    this.sigggnnn();
  }
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  private sigggnnn(): void {
    this.service.registernewproject(this.form2.value).subscribe(
      res => {
        console.log("hi i'am call the cotrooler")
       
        this.form2.reset();
      },
      err => {
      
      }
    );
  }



  onPost() {
    //this.status={statusCode:0,message:'wait..'};
    this.service.addUpdateuser(this.frm.value).subscribe({
      next: (res) => {
        //this.status=res;

        // this.frm.reset();
        this.getuser();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }



  ngOnInit() {

    this.addInputField();
    this.funform();
  
    this.initForm();


    this.initForm2();
    this.userStore.getIdFromStore()
    .subscribe(val => {
        //console.log(" now in getRoleFromStore function ");


        let fulllidFromToken = this.service.getIdFromTken();// string


        var numberValue = Number(fulllidFromToken);

        this.id_login = val || numberValue
        console.log("user data 'idd' whose login == == = = = ");

        console.log(this.id_login);
    })

    this.getuser();
  }








  funform() {
    this.frm = this.fb.group({
      id: [0],
      userName: [null],
      firstName: [null],
      lastName: [null],
      phoneNumber: [null],
      city: [null],
      bio: [null],
      state: [null],
      email: [null],
      gpa: [null],
      education: [null],
      password: [null],
      experience: [null],



      // 'id':[0],
      //'name':['',Validators.required]
    })

  }

  initForm():void {
    this.form = this.fb.group({
 
      skillone : [null],
      skilltwo : [null]
      
    });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
initForm2():void {
  this.form2 = this.fb.group({

    Title : [null],
    Decription : [null]
    
  });
}


  addInputField() {
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'input' + this.numInputFields;
    input.id = 'input' + this.numInputFields;



    // Add styles to input field
    input.style.border = '1px solid black';
    input.style.padding = '5px';
    input.style.marginBottom = '10px';

    input.style.display = 'block';
    input.style.width = ' 100%';
    input.style.padding = '0.375rem 0.75rem';
    input.style.fontSize = '1rem';
    input.style.fontWeight = '400';
    input.style.lineHeight = '1.5';
    input.style.color = '#212529';
    input.style.backgroundColor = '#fff';
    input.style.backgroundClip = 'padding-box';
    input.style.border = ' 1px solid #ced4da';

    input.style.appearance = 'none';
    input.style.borderRadius = '0.375rem';
    input.style.transition = 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out';


    const container = document.getElementById('input-container');
    container.appendChild(input);
    this.numInputFields++;
  }

  onSubmit() {
    // console.log(this.myVariable);
  }







}
