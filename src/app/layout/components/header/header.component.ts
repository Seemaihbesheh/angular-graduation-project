import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Status } from '../../dashboard/components/add-post/models/status';
import { ProductService } from '../../dashboard/components/add-post/product.service';
import { Product } from '../../dashboard/components/add-post/models/product';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    btnLoader = false;

         // userr: userr[];
   form: FormGroup;
   loading = false;
    message: string = '';
      response: any = {}
      public totalCounter: number = 0;
  
    // product:Product = {id:0,productName:'',productImage:''};
    imageFile?: File;
    status!: Status;
    constructor(private translate: TranslateService,
        private service: AuthService,
        public router: Router,
        private productService: ProductService,
    private fb: FormBuilder,
        ) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    // ngOnInit(): void {
    //     this.pushRightClass = 'push-right';
    //     this.initForm();
    // }


    ngOnInit() {
      const savedResponse = localStorage.getItem('response');
      if (savedResponse) {
        this.response = JSON.parse(savedResponse);
        }
        this.response = JSON.parse(localStorage.getItem('response'));
        const savedTotalCounter = localStorage.getItem('totalCounter');
        if (savedTotalCounter) {
          this.totalCounter = parseInt(savedTotalCounter);
        }
      
         this.initForm();
         this.signUpp();
     }

    // ngOnInit(): void {
    //     const savedResponse = localStorage.getItem('response');
    //     if (savedResponse) {
    //         this.response = JSON.parse(savedResponse);
    //     }
    //     this.response = JSON.parse(localStorage.getItem('response'));
    //     const savedTotalCounter = localStorage.getItem('totalCounter');
    //     if (savedTotalCounter) {
    //         this.totalCounter = parseInt(savedTotalCounter);
    //     }
        
    //     this.pushRightClass = 'push-right';
    //     this.form = new FormGroup({
    //     });
        
        
    //     this.initForm();
    //     this.signUpp();
            
    //   }
    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }



    get f() {
        return this.form.controls;
      }
    // public  onPost():void {
    //     this.status = { statusCode: 0, message: 'wait..' };
    
    //     const frmData: Product = Object.assign(this.form.value);
    //     frmData.imageFile = this.imageFile;
    //     // we will call our service, and pass this object to it
    //     this.productService.add(frmData).subscribe(
    //       // next: (res) => {
    //       //   this.status = res;
    //       // },
    //       // error: (err) => {
    //       //   this.status = { statusCode: 0, message: 'Error on server side' }
    //       //   console.log(err);
    //       // }
    
    //       res => {
    //         if (!this.response.items) {
    //           this.response.items = [];
    //         }
    //         const existingItemIndex = this.response.items.findIndex(item => item.message === res.message );
    //         if (existingItemIndex >= 0) {
    //           this.response.items[existingItemIndex].counter++;
    //           this.totalCounter++;
    //         } else {
    //           this.response.items.push({ message: res.message, counter: 1 });
    //           this.totalCounter++;
    //         }
    //         localStorage.setItem('response', JSON.stringify(this.response));
    //         localStorage.setItem('totalCounter', this.totalCounter.toString());
    //         console.log('response.items after:', this.response.items);
      
    //       },
    
    
    //       );
    //      // window.location.href = 'http://localhost:4200/dashboard';
    //    // this.router.navigateByUrl('/findjob-page');

    //    // window.location.href = 'http://localhost:4200/dashboard';
    //   // this.router.navigateByUrl('/findjob-page');
    //    // this.router.navigateByUrl('/dashboard');
    // // location.reload();

  




    //   }

      // private signUpp(): void {
      //   this.service.addpushjobs(this.form.value).subscribe(
      //     res => {
      //       console.log("hi i'am call the PUSH JOBB  register");
      //       console.log("hi i'am call the PUSH JOBB  register")
      //       console.log("hi i'am call the PUSH JOBB  register")
 
      //       this.handleSuccess();
      //       this.form.reset();
 
 
      //       if (!this.response.items) {
      //        this.response.items = [];
      //      }
      //      const existingItemIndex = this.response.items.findIndex(item => item.message === res.message );
      //      if (existingItemIndex >= 0) {
      //        this.response.items[existingItemIndex].counter++;
      //        this.totalCounter++;
      //      } else {
      //        this.response.items.push({ message: res.message, counter: 1 });
      //        this.totalCounter++;
      //      }
      //      localStorage.setItem('response', JSON.stringify(this.response));
      //      localStorage.setItem('totalCounter', this.totalCounter.toString());
      //      console.log('response.items after:', this.response.items);
 
 
 
      //     },
      //     err => {
      //       this.handleError(err.error);
      //     }
      //   );
      // }
    
    
    
      private handleSuccess(): void {
        this.loading = false;
      }
    
      private handleError(message?: string): void {
        this.loading = false;
      }
    
      //AMEER decrementCounter(item: any) {
      //   if (item.counter > 0) { 
      //     item.counter--;
      //     this.totalCounter--;
      //     localStorage.setItem('response', JSON.stringify(this.response));
      //     localStorage.setItem('totalCounter', this.totalCounter.toString());  
      //   }

      //   this.router.navigateByUrl('/findjob-page');
      // }

      
   submit():void {
    if (this.form.invalid) {
      this.loading = false;
      return;
    }
        this.btnLoader = true;

    this.loading = true;
    const formVal = Object.assign({}, this.form.value);
    console.log("hi i'am  in sumoit now")

    this.signUpp();


  }


      decrementCounter(item: any) {
        if (item.counter > 0) { 
          item.counter--;
          this.totalCounter--;
          localStorage.setItem('response', JSON.stringify(this.response));
          localStorage.setItem('totalCounter', this.totalCounter.toString());  
        }
      }
    
      onChange(event: any) {
        this.imageFile = event.target.files[0];
      }
    
    //   initForm(): void {
    //     this.form = this.fb.group({
    //       'id': [0],
    //       'productName': ['', Validators.required],
    //       'imageFile': []
    //     })
    //   }
   

   
    initForm():void {
        this.form = this.fb.group({
         Description: [null],
        
         Pre_title:  [null],
         Title : [null],
         Requrment : [null],
      
         Place : [null],
         Email : [null],
         Job_Deadline : [null],
         Job_PuplishDate:[null],
         companyid:[null]
             //  Token:[null],
        });
    }

   



  private signUpp(): void {
    this.service.addpushjobs(this.form.value).subscribe(
      res => {
        console.log("hi i'am call the PUSH JOBB  register");
        console.log("hi i'am call the PUSH JOBB  register")
        console.log("hi i'am call the PUSH JOBB  register")

        this.handleSuccess();
        this.form.reset();


        if (!this.response.items) {
         this.response.items = [];
       }
       const existingItemIndex = this.response.items.findIndex(item => item.message === res.message );
       if (existingItemIndex >= 0) {
         this.response.items[existingItemIndex].counter++;
         this.totalCounter++;
       } else {
         this.response.items.push({ message: res.message, counter: 1 });
         this.totalCounter++;
       }
       localStorage.setItem('response', JSON.stringify(this.response));
       localStorage.setItem('totalCounter', this.totalCounter.toString());
       console.log('response.items after:', this.response.items);
       window.location.reload();


      },
      err => {
        this.handleError(err.error);
      }
    );
  }



    }



