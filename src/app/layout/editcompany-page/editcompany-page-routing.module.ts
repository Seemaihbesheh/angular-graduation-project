import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditcompanyPageComponent } from './editcompany-page.component';



const routes: Routes = [
    {
        path: '',
        component: EditcompanyPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditcompanyPageRoutingModule {}
