import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyJobPageComponent } from './applyJob-page.component';
const routes: Routes = [
    {
        path: '',
        component: ApplyJobPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApplyJobPageRoutingModule {}
