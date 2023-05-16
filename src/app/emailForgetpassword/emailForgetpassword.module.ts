import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import {EmailForgetpasswordRoutingModule } from './emailForgetpassword-routing.module';
import { EmailForgetpasswordComponent } from './emailForgetpassword.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, TranslateModule, EmailForgetpasswordRoutingModule,ReactiveFormsModule,FormsModule],
    declarations: [EmailForgetpasswordComponent]
})
export class EmailForgetpasswordModule {}
