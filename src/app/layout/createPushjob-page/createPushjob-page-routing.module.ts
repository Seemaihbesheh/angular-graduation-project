import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePushjobPageComponent } from './createPushjob-page.component';

//createPushjob
const routes: Routes = [
    {
        path: '',
        component: CreatePushjobPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreatePushjobPageRoutingModule {}
