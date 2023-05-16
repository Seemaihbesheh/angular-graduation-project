import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';




@NgModule({
    imports: [CommonModule, BlankPageRoutingModule,FormsModule,ReactiveFormsModule],
    declarations: [BlankPageComponent]
})
export class BlankPageModule {}
