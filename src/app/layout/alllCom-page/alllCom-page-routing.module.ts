import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  AlllComPageComponent } from './alllCom-page.component';



const routes: Routes = [
    {
        path: '',
        component:  AlllComPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class  AlllComPageRoutingModule {}
