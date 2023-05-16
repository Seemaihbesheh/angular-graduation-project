import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailForgetpasswordComponent } from './emailForgetpassword.component';

const routes: Routes = [
    {
        path: '',
        component: EmailForgetpasswordComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmailForgetpasswordRoutingModule {}
