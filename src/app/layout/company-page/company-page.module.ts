import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompanyPageRoutingModule } from './company-page-routing.module';
import { CompanyPageComponent } from './company-page.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [CommonModule, CompanyPageRoutingModule,FormsModule,ReactiveFormsModule],
    declarations: [CompanyPageComponent]
})
export class CompanyPageModule {}
