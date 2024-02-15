import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindjobCompanyPageComponent } from './findjobCompany-page.component';
const routes: Routes = [
    {
        path: '',
        component: FindjobCompanyPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FindjobCompanyPageRoutingModule {}
