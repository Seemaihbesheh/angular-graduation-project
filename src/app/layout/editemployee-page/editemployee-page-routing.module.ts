import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditemployeePageComponent } from './editemployee-page.component';
const routes: Routes = [
    {
        path: '',
        component: EditemployeePageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditemployeePageRoutingModule {}

