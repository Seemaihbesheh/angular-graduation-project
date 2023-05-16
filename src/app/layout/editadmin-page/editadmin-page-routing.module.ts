import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditadminPageComponent } from './editadmin-page.component';



const routes: Routes = [
    {
        path: '',
        component: EditadminPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditadminPageRoutingModule {}


