import { Routes } from '@angular/router';
import { AuthGuard } from '@app/core/guards/auth.guard';
import { MainComponent } from './main.component';

export const appRoutes: Routes = [
    // {
    //     path: '', 
    //     redirectTo: 'dashboard',
    //     pathMatch:'full'
    // },
    {
        path: '', 
        component: MainComponent,
        canActivate:[AuthGuard],
        children: [
            { path: 'dashboard', loadChildren: () => import('@app/modules/dashboard/dashboard.module').then(_ => _.DashboardModule) },
            { path: 'nav-link-1', loadChildren: () => import('@app/modules/nav-link-1/nav-link-1.module').then(_ => _.NavLink1Module) },
        ]
}];