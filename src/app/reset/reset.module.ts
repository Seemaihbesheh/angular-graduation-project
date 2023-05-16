import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ReseRoutingModule } from './reset-routing.module';
import { ResetComponent } from './reset.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, TranslateModule, ReseRoutingModule,ReactiveFormsModule,FormsModule],
    declarations: [ResetComponent]
})
export class ResetModule {}
