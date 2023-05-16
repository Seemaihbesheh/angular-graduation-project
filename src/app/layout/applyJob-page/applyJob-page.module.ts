import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ApplyJobPageRoutingModule } from './applyJob-page-routing.module';
import { ApplyJobPageComponent } from './applyJob-page.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, ApplyJobPageRoutingModule,Ng2SearchPipeModule,FormsModule],
    declarations: [ApplyJobPageComponent]
})
export class ApplyJobPageModule {}
