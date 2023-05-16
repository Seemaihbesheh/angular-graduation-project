import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import {ChangepasssRoutingModule } from './changepasss-routing.module';
import { ChangepasssComponent } from './changepasss.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, TranslateModule, ChangepasssRoutingModule,ReactiveFormsModule,FormsModule],
    declarations: [ChangepasssComponent]
})
export class ChangepasssModule {}
