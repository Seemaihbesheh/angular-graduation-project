import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from './../../shared';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { DaialogtableComponent } from './daialogtable/daialogtable.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule,ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl:'never'}), TablesRoutingModule, PageHeaderModule],
    declarations: [TablesComponent, DaialogtableComponent]
})
export class TablesModule {}
