import { Component, OnInit } from '@angular/core';
// import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status } from '../add-post/models/status';
// import { ProductService } from './product.service';
import { Product } from '../add-post/models/product';
import { environment } from '../../../../../environments/environment';
import { ProductService } from '../add-post/product.service';
import { AuthService } from '../../../auth.service';
import { userr } from '../../userr';
import { UserStoreService } from '../../../user-store.service';
import { without } from '../add-post/without';
import { commentss } from './commentss';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})


export class TimelineComponent implements OnInit {
  products: Product[];
  imageBaseUrl = environment.baseUrl + 'resources/';
  dates: Date;
  user: userr[];
  currentDate: Date = new Date();
  public id_login: Number = 0;

  flag: boolean = true;
  without: without[];
  form: FormGroup;
  constructor(private fb: FormBuilder, private productService: ProductService, private service: AuthService, private userStore: UserStoreService) { }









  private getpushContent(): void {
    // var  idd =60;
    //        this.service.getuserbyid(idd).subscribe(data => {

    this.service.getpushContent().subscribe(data => {
      this.without = data;

      console.log(this.without);
    });
  }





  public video = [
    { Like: 7, DisLike: 5 },



  ]
  public video2 = [
    { Like: 1, DisLike: 10 },



  ]

  public video3 = [
    { Like: 0, DisLike: 0 },



  ]
  public LikeCounter(video: any) {
    video.Like++;
  }
  public DisLikeCounter(video: any) {
    video.DisLike++;
  }



  public LikeCounter2(video2: any) {
    video2.Like++;
  }
  public DisLikeCounter2(video2: any) {
    video2.DisLike++;
  }
  public LikeCounter3(video3: any) {
    video3.Like++;
  }
  public DisLikeCounter3(video3: any) {
    video3.DisLike++;
  }


  getProducts() {
    this.productService.getAll().subscribe({
      next: (resp) => {
        this.products = resp;
        //if imagefile == null
        // for (const product of this.products) {
        //   if (product.productImage === null) {
        //     //no phtoto

        //     this.flag=false;

        //   }


        //  }




      },
      error: (err) => {
        console.log(err);
      }
    })
  }



  private getuserid(): void {
    // var  idd =60;
    //        this.service.getuserbyid(idd).subscribe(data => {

    this.service.getuserbyid((this.id_login.valueOf())).subscribe(data => {
      this.user = data;

      console.log(this.user);
    });
  }





  ngOnInit(): void {


    this.userStore.getIdFromStore()
      .subscribe(val => {
        //console.log(" now in getRoleFromStore function ");


        let fulllidFromToken = this.service.getIdFromTken();// string


        var numberValue = Number(fulllidFromToken);

        this.id_login = val || numberValue
        console.log("user data 'idd' whose login in user component");

        console.log(this.id_login);
      })

    this.initForm();
    this.getProducts();

    this.getuserid();


    this.compareDates();
    this.getpushContent();
    this.getcommentss();




  }




  compareDates() {
    this.dates = this.currentDate;
    console.log(this.currentDate.getTime());



  }
  initForm(): void {
    this.form = this.fb.group({

      commentText: [null]


    });
  }

  submit(): void {

    const formVal = Object.assign({}, this.form.value);

    //this.reviewSaved = true;

    this.postComment();
  }



  commentss: commentss[];


  private getcommentss(): void {
    // var  idd =60;
    //        this.service.getuserbyid(idd).subscribe(data => {


    this.service.getcomment().subscribe(data => {
      this.commentss = data;
      console.log("i will getcommentss commentsss =>", this.commentss);

    });
  }
  private postComment(): void {
    this.service.registernewrCOMMENT(this.form.value).subscribe(
      res => {


        this.form.reset();
        this.getcommentss();
      },
      err => {

      }
    );
  }

}

