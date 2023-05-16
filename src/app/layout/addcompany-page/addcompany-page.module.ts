import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddcompanyPageRoutingModule } from './addcompany-page-routing.module';
import { AddcompanyPageComponent } from './addcompany-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';




@NgModule({
    imports: [CommonModule, AddcompanyPageRoutingModule,FormsModule,ReactiveFormsModule],
    declarations: [AddcompanyPageComponent]
})
export class AddcompanyPageModule {}
