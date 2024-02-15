import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserApplyJobPageRoutingModule } from './userapplyJob-page-routing.module';
import { UserApplyJobPageComponent } from './userapplyJob-page.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, UserApplyJobPageRoutingModule,Ng2SearchPipeModule,FormsModule],
    declarations: [UserApplyJobPageComponent]
})
export class UserApplyJobPageModule {}
