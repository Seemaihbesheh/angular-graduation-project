import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { postRoutingModule } from './post-routing.module';
import { postComponent } from './post.component';

@NgModule({
    imports: [CommonModule, postRoutingModule],
    declarations: [postComponent]
})
export class BlankPageModule {}
