import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindjobPageComponent } from './findjob-page.component';
const routes: Routes = [
    {
        path: '',
        component: FindjobPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FindjobPageRoutingModule {}
