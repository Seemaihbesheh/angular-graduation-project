import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { tableService } from './tables.service';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {


     myData: any[];

    constructor(private yara: tableService
        
        ) {


    }

    ngOnInit() {

        this.getdata();

    }


    getdata(){
//get all students
        this.yara.getTable().subscribe(x => {
            this.myData = x;})
    }
}


