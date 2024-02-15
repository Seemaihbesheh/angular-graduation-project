import { Component, OnInit } from '@angular/core';


import { AuthService } from '../auth.service';
import { userr } from './userr';
import { UserStoreService } from '../user-store.service';
import { skill } from './skill';
import { projects } from './projects';
import { ActivatedRoute, Params } from '@angular/router';
import { without } from '../dashboard/components/add-post/without';
import { Product } from '../dashboard/components/add-post/models/product';
import { ProductService } from '../dashboard/components/add-post/product.service';



@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss']
})
export class EmployeePageComponent implements OnInit {
  products: Product[];

  //comapny: comapny[];
  user: userr[];
  without: without[];
  skill: skill[];
  currentDate: Date = new Date();
  project: projects[];
  dates: Date;
  constructor(private productService: ProductService, private service: AuthService, private userStore: UserStoreService, private rout: ActivatedRoute) { }

  public id_login: Number = 0;









  usertest: { id: number };

  ngOnInit() {



    this.usertest = {
      id: this.rout.snapshot.params['id']
    };
    // to change in two thing
    this.rout.params.subscribe((data: Params) => {
      this.usertest = {

        id: data['id'],
      };
    });












    this.userStore.getIdFromStore()
      .subscribe(val => {
        //console.log(" now in getRoleFromStore function ");


        let fulllidFromToken = this.service.getIdFromTken();// string


        var numberValue = Number(fulllidFromToken);

        this.id_login = val || numberValue
        console.log("user data 'idd' whose login in user component");

        console.log(this.id_login);
      })

    this.getuserid();

    this.getskill();
    this.getprojects();

    this.getEmplyeeProfileByfindJob();
    this.getpushContent();
    this.compareDates();

  }


  compareDates() {
    this.dates = this.currentDate;
    console.log(this.currentDate.getTime());

    this.getProducts();

  }


  private getEmplyeeProfileByfindJob(): void {


    this.service.getuserbyid(this.usertest.id).subscribe(data => {
      this.user = data;
      console.log(this.user);
    });


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



  private getskill(): void {
    // var  idd =60;
    //        this.service.getuserbyid(idd).subscribe(data => {

    this.service.getSkilss().subscribe(data => {
      this.skill = data;
      console.log(this.skill); console.log(this.skill); console.log(this.skill); console.log(this.skill);
    });
  }

  //getprojects

  private getprojects(): void {
    // var  idd =60;
    //        this.service.getuserbyid(idd).subscribe(data => {

    this.service.getproject().subscribe(data => {
      this.project = data;
      console.log("i want to pront all projectss ");
      console.log(this.project);
    });
  }


  private getpushContent(): void {
    // var  idd =60;
    //        this.service.getuserbyid(idd).subscribe(data => {

    this.service.getpushContent().subscribe(data => {
      this.without = data;

      console.log(this.without);
    });
  }






}
