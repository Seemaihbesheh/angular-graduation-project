import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FindjobPageRoutingModule } from './findjob-page-routing.module';
import { FindjobPageComponent } from './findjob-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule,FindjobPageRoutingModule,Ng2SearchPipeModule,HttpClientModule,FormsModule],
    declarations: [FindjobPageComponent]
})
export class FindjobPageModule {}
