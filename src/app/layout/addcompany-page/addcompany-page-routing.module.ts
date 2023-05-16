import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcompanyPageComponent } from './addcompany-page.component';



const routes: Routes = [
    {
        path: '',
        component: AddcompanyPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddcompanyPageRoutingModule {}
