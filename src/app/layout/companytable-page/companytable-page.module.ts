import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompanytablePageRoutingModule } from './companytable-page-routing.module';
import { CompanytablePageComponent } from './companytable-page.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [CommonModule, CompanytablePageRoutingModule,FormsModule,ReactiveFormsModule],
    declarations: [CompanytablePageComponent]
})
export class CompanytablePageModule {}
