import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homepostComponent } from './homepost.component';


const routes: Routes = [
    {
        path: '',
        component: homepostComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class homepostRoutingModule {}
