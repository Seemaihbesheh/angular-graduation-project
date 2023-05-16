import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { signupcompanyRoutingModule } from './signupcompany-routing.module';
import { signupcompanyComponent } from './signupcompany.component';

@NgModule({
    imports: [CommonModule, TranslateModule, signupcompanyRoutingModule,ReactiveFormsModule],
    declarations: [signupcompanyComponent]
})
export class signupcompanyModule {}
