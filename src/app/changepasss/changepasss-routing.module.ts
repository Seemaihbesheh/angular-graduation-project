import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasssComponent } from './changepasss.component';

const routes: Routes = [
    {
        path: '',
        component: ChangepasssComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChangepasssRoutingModule {}
