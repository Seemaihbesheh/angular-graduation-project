import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvPageRoutingModule } from './cv-page-routing.module';
import { CvPageComponent } from './cv-page.component';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, CvPageRoutingModule,FormsModule, ReactiveFormsModule],
    declarations: [CvPageComponent]
})
export class CvPageModule {}
