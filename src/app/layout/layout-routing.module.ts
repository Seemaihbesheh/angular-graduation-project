import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
           
        //     {
        //         path: 'dashboard',
        //         loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
        //     },
            
        //     { path: 'charts', loadChildren: () => import('./charts/charts.module').then((m) => m.ChartsModule) },


        


        //     { path: 'tables', loadChildren: () => import('./tables/tables.module').then((m) => m.TablesModule) },
        //  //   { path: 'forms', loadChildren: () => import('./form/form.module').then((m) => m.FormModule) },
        //     {
        //         path: 'bs-element',
        //         loadChildren: () => import('./bs-element/bs-element.module').then((m) => m.BsElementModule)
        //     },
        //     { path: 'grid', loadChildren: () => import('./grid/grid.module').then((m) => m.GridModule) },
            
        //     {

        //         path: 'components',
        //         loadChildren: () => import('./bs-component/bs-component.module').then((m) => m.BsComponentModule)
        //     },


            // {
            //     path: 'blank-page',
            //     loadChildren: () => import('./blank-page/blank-page.module').then((m) => m.BlankPageModule)

            // }
            // ,
            // {
            //     path: 'cv-page',
            //     loadChildren: () => import('./cv-page/cv-page.module').then((m) => m.CvPageModule)

            // }
            // ,

            // {
            //     path: 'create-job',

            //     loadChildren: () => import('./create-job/create-job.module').then((m) => m.CreateJobModule)

            // }
            // ,
            // {
            //     path: 'apply-job',
            //     //gOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOD !!!
            //     loadChildren: () => import('./applyJob-page/applyJob-page.module').then((m) => m.ApplyJobPageModule)
            // }
            // ,
            

    
            {
                path: 'loginnn',
                loadChildren: () => import('./blank-page/blank-page.module').then((m) => m.BlankPageModule)

            }
            ,
            
            // {
            //     path: 'company-page',
            //     loadChildren: () => import('./company-page/company-page.module').then((m) => m.CompanyPageModule)

            // }
            // ,
            // {
            //     path: 'employee-page',
            //     loadChildren: () => import('./employee-page/employee-page.module').then((m) => m.EmployeePageModule)
                

            // }
            // ,
            
            
            // {
            //     path: 'edit_user',
            //     loadChildren: () => import('./edituser-page/edituser-page.module').then((m) => m.EdituserPageModule)
                

            // }
            // ,
            // {
            //     path: 'findjob-page',
            //     loadChildren: () => import('./findjob-page/findjob-page.module').then((m) => m.FindjobPageModule)
                

            // }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }



