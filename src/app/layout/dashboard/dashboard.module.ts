import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../shared';
import { ChatComponent, NotificationComponent, TimelineComponent } from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AddPostComponent } from './components/add-post/add-post.component';

@NgModule({
    imports: [FormsModule,ReactiveFormsModule,CommonModule,NgbCarouselModule, ReactiveFormsModule,
NgbAlertModule, DashboardRoutingModule, StatModule],
    declarations: [DashboardComponent, TimelineComponent, NotificationComponent, ChatComponent, AddPostComponent]
})
export class DashboardModule {}

