import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EditcompanyPageRoutingModule } from './editcompany-page-routing.module';
import { EditcompanyPageComponent } from './editcompany-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';




@NgModule({
    imports: [CommonModule, EditcompanyPageRoutingModule,FormsModule,ReactiveFormsModule],
    declarations: [EditcompanyPageComponent]
})
export class EditcompanyPageModule {}
