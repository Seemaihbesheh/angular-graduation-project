import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CreatePushjobPageRoutingModule } from './createPushjob-page-routing.module';
import { CreatePushjobPageComponent } from './createPushjob-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';




@NgModule({
    imports: [CommonModule, CreatePushjobPageRoutingModule,FormsModule,ReactiveFormsModule],
    declarations: [CreatePushjobPageComponent]
})
export class CreatePushjobPageModule {}
