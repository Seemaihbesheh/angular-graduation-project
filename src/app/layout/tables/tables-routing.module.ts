import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './tables.component';
import { DaialogtableComponent } from './daialogtable/daialogtable.component';

const routes: Routes = [
    {
        path: '',
        component: TablesComponent
    },
    {

        path:'add',
        component:DaialogtableComponent,
        data :{pageTitle :'Add'}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule {}
