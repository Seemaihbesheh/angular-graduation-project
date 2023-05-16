import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmployeePageRoutingModule } from './employee-page-routing.module';
import { EmployeePageComponent } from './employee-page.component';

@NgModule({
    imports: [CommonModule, EmployeePageRoutingModule],
    declarations: [EmployeePageComponent]
})
export class EmployeePageModule {}

