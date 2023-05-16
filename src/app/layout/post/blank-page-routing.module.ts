import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { postPageComponent } from './post.component';
const routes: Routes = [
    {
        path: '',
        component: postComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class postModule {}
