import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EditadminPageRoutingModule } from './editadmin-page-routing.module';
import { EditadminPageComponent } from './editadmin-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';




@NgModule({
    imports: [CommonModule, EditadminPageRoutingModule,FormsModule,ReactiveFormsModule],
    declarations: [EditadminPageComponent]
})
export class EditadminPageModule {}
