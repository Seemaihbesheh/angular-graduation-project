import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { homepostRoutingModule } from './homepost-routing.module';


import { homepostComponent } from './homepost.component';

@NgModule({
   imports: [CommonModule, homepostRoutingModule],
    declarations: [homepostComponent]
})
export class homepostModule {

    
}
