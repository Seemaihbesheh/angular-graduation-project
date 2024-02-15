import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserApplyJobPageComponent } from './userapplyJob-page.component';
const routes: Routes = [
    {
        path: '',
        component: UserApplyJobPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserApplyJobPageRoutingModule {}
