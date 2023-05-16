
import { Component, OnInit } from '@angular/core';

declare function greet():void;
    

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor() {

     //   greet();
       // merge();
    }

    ngOnInit() {}
}
