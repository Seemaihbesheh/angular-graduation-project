import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FindjobCompanyPageRoutingModule } from './findjobCompany-page-routing.module';
import { FindjobCompanyPageComponent } from './findjobCompany-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule,FindjobCompanyPageRoutingModule,Ng2SearchPipeModule,HttpClientModule,FormsModule],
    declarations: [FindjobCompanyPageComponent]
})
export class FindjobCompanyPageModule {}
