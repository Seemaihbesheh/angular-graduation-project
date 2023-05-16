import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompanyPageRoutingModule } from './company-page-routing.module';
import { CompanyPageComponent } from './company-page.component';

@NgModule({
    imports: [CommonModule, CompanyPageRoutingModule],
    declarations: [CompanyPageComponent]
})
export class CompanyPageModule {}
