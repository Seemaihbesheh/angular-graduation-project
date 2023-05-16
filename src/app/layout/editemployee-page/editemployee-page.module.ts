import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EditemployeePageRoutingModule } from './editemployee-page-routing.module';
import { EditemployeePageComponent } from './editemployee-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [CommonModule, EditemployeePageRoutingModule,FormsModule,ReactiveFormsModule],
    declarations: [EditemployeePageComponent]
})
export class EditemployeePageModule {}
