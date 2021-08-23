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
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        data: {
          breadcrumb: [
            {
              label: 'Dashboard',
              url: '/dashboard',
            },
          ],
        },
        loadChildren: () =>
          import('@app/modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'nav-link-1',
        data: {
          breadcrumb: [
            {
              label: 'Nav Link 1',
              url: '/nav-link-1',
            },
          ],
        },
        loadChildren: () =>
          import('@app/modules/nav-link-1/nav-link-1.module').then(
            (m) => m.NavLink1Module
          ),
      },
    ],
  },
];
