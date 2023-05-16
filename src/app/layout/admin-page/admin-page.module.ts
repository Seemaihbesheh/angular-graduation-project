import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminPageComponent } from './admin-page.component';

@NgModule({
    imports: [CommonModule, AdminPageRoutingModule],
    declarations: [AdminPageComponent]
})
export class AdminPageModule {}
