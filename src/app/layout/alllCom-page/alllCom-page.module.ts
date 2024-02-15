import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {  AlllComPageRoutingModule } from './alllCom-page-routing.module';
import {  AlllComPageComponent } from './alllCom-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';




@NgModule({
    imports: [CommonModule,  AlllComPageRoutingModule,FormsModule,ReactiveFormsModule],
    declarations: [ AlllComPageComponent]
})
export class  AlllComPageModule {}
