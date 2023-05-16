import { Component, OnInit } from '@angular/core';


//import { routerTransition } from '../../router.animations';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-homepost',
    templateUrl: './homepost.component.html',
    styleUrls :['./homepost.component.scss'],
    animations: [routerTransition()]
})
export class homepostComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
