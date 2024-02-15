import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared';
import { Authgured2Guard } from './authgured2.guard';

import { LayoutComponent } from './layout/layout.component';
import { layouts } from 'chart.js';

const routes: Routes = [

    {
        path: '',
        loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
        canActivate: [AuthGuard]
    },

    { path: 'index', loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule) },



    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },

            // {
            //     path: 'create-job',

            //     loadChildren: () => import('./layout/create-job/create-job.module').then((m) => m.CreateJobModule)

            // }
            // ,

            {
                //path: 'apply-job',

                
                path: 'apply-jobs/:id',
           
                loadChildren: () => import('./layout/applyJob-page/applyJob-page.module').then((m) => m.ApplyJobPageModule)
            }
           ,


           {
            path: 'company-page/:id',
            loadChildren: () => import('./layout/company-page/company-page.module').then((m) => m.CompanyPageModule)

        }
        ,
           ///userapply
           {
            //path: 'apply-job',
            path: 'userapply-job/:id',
       
            loadChildren: () => import('./layout/userapplyJob-page/userapplyJob-page.module').then((m) => m.UserApplyJobPageModule)
        }
       ,
           {
            //path: 'apply-job',
            path: 'apply-jobs',
       
            loadChildren: () => import('./layout/applyJob-page/applyJob-page.module').then((m) => m.ApplyJobPageModule)
        }
            // 
           
            ,
           // 

           {
            path: 'addcompany-page',
            loadChildren: () => import('./layout/addcompany-page/addcompany-page.module').then((m) => m.AddcompanyPageModule)


        }
            ,
           
         
            {
                path: 'employee-page',
                loadChildren: () => import('./layout/employee-page/employee-page.module').then((m) => m.EmployeePageModule)


            }
            
            ,
            {
                path: 'employee-page/:id',
                loadChildren: () => import('./layout/employee-page/employee-page.module').then((m) => m.EmployeePageModule)


            }

      ,
            //   admin-page
            {
                path: 'admin-page',
                loadChildren: () => import('./layout/admin-page/admin-page.module').then((m) => m.AdminPageModule)


            }
            ,
            {
                path: 'company-page',
                loadChildren: () => import('./layout/company-page/company-page.module').then((m) => m.CompanyPageModule)

            }
           
            ,
         //   createPushjob-page
         {
            path: 'createPushjob-page',
            loadChildren: () => import('./layout/createPushjob-page/createPushjob-page.module').then((m) => m.CreatePushjobPageModule)

        }
            ,

            {
                path: 'editemployee-page',
                loadChildren: () => import('./layout/editemployee-page/editemployee-page.module').then((m) => m.EditemployeePageModule)


            }
            
            ,
            {
                path: 'edit_admin',
                loadChildren: () => import('./layout/editadmin-page/editadmin-page.module').then((m) => m.EditadminPageModule)

            }
            ,

            {
                path: 'editcompany-page',
                // loadChildren: () => import('./layout/edituser-page/edituser-page.module').then((m) => m.EdituserPageModule)
                //EditcompanyPageModule
                loadChildren: () => import('./layout/editcompany-page/editcompany-page.module').then((m) => m.EditcompanyPageModule)

            }
            ,
            {
                path: 'findjob-page',
                loadChildren: () => import('./layout/findjob-page/findjob-page.module').then((m) => m.FindjobPageModule)


            }
            ,//companytable-page
            {
                path: 'companytable-page',
                loadChildren: () => import('./layout/companytable-page/companytable-page.module').then((m) => m.CompanytablePageModule)


            }
            ,
            {
                path: 'findjobCompany-page',
                loadChildren: () => import('./layout/findjobCompany-page/findjobCompany-page.module').then((m) => m.FindjobCompanyPageModule)


            }
             ,
            {
                path: 'company-page/:id',
                loadChildren: () => import('./layout/company-page/company-page.module').then((m) => m.CompanyPageModule)

            }
            ,

            {
                path: 'blank-page',
                loadChildren: () => import('./layout/blank-page/blank-page.module').then((m) => m.BlankPageModule)

            }
            ,

            //alllCom-page
            {
                path: 'alllCom-page',
                loadChildren: () => import('./layout/alllCom-page/alllCom-page.module').then((m) => m.AlllComPageModule)

            }
            ,
            {
                path: 'cv-page',
                loadChildren: () => import('./layout/cv-page/cv-page.module').then((m) => m.CvPageModule)

            }
            ,



            {
                path: 'dashboard',
                loadChildren: () => import('./layout/dashboard/dashboard.module').then((m) => m.DashboardModule)
            },

            { path: 'charts', loadChildren: () => import('./layout/charts/charts.module').then((m) => m.ChartsModule) },





            { path: 'tables', loadChildren: () => import('./layout/tables/tables.module').then((m) => m.TablesModule) },
            //   { path: 'forms', loadChildren: () => import('./form/form.module').then((m) => m.FormModule) },
            // {
            //     path: 'bs-element',
            //     loadChildren: () => import('./layout/bs-element/bs-element.module').then((m) => m.BsElementModule)
            // },
            //  { path: 'grid', loadChildren: () => import('./layout/grid/grid.module').then((m) => m.GridModule) },

            // {

            //     path: 'components',
            //     loadChildren: () => import('./layout/bs-component/bs-component.module').then((m) => m.BsComponentModule)
            // },





        ]



    },
















    //  {path:'homeSEEMA',component:LayoutComponent },

    { path: 'index', loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule) },


//emailForgetpassword
{ path: 'emailForgetpassword', loadChildren: () => import('./emailForgetpassword/emailForgetpassword.module').then((m) => m.EmailForgetpasswordModule) },

    { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },

    { path: 'reset', loadChildren: () => import('./reset/reset.module').then((m) => m.ResetModule) },
    { path: 'changepasss', loadChildren: () => import('./changepasss/changepasss.module').then((m) => m.ChangepasssModule) },

    //{ path: 'homepost', loadChildren: () => import('./homepost/homepost.module').then((m) => m.homepostModule) },


   



    



    { path: 'signup', loadChildren: () => import('./signup/signup.module').then((m) => m.SignupModule) },

    
    { path: 'signupcompany', loadChildren: () => import('./signupcompany/signupcompany.module').then((m) => m.signupcompanyModule) },

    {
        path: 'error',
        loadChildren: () => import('./server-error/server-error.module').then((m) => m.ServerErrorModule)
    },
    {
        path: 'access-denied',
        loadChildren: () => import('./access-denied/access-denied.module').then((m) => m.AccessDeniedModule)
    },
    { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule) },



    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }





