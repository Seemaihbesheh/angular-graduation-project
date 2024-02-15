import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanytablePageComponent } from './companytable-page.component';
const routes: Routes = [
    {
        path: '',
        component: CompanytablePageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompanytablePageRoutingModule {}
