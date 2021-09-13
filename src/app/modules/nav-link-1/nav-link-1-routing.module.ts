import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavLink1Component } from './nav-link1/nav-link1.component';
import { NavSubLink1Component } from './nav-sub-link1/nav-sub-link1.component';
import { NavSubLink2Component } from './nav-sub-link2/nav-sub-link2.component';
import { NavSubLink3Component } from './nav-sub-link3/nav-sub-link3.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/nav-link-1/sub-link-1',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: NavLink1Component,
    data: {
      breadcrumb: [
        {
          label: 'Nav Link 1',
        },
      ],
    },
    children: [
      {
        path: 'sub-link-1',
        component: NavSubLink1Component,
        data: {
          breadcrumb: [
            {
              label: 'Nav Link 1',
              url: '/nav-link-1',
            },
            {
              label: 'Sub Link 1',
            },
          ],
        },
      },
      {
        path: 'sub-link-2',
        component: NavSubLink2Component,
        data: {
          breadcrumb: [
            {
              label: 'Nav Link 1',
              url: '/nav-link-1',
            },
            {
              label: 'Sub Link 2',
            },
          ],
        },
      },
      {
        path: 'sub-link-3',
        component: NavSubLink3Component,
        data: {
          breadcrumb: [
            {
              label: 'Nav Link 1',
              url: '/nav-link-1',
            },
            {
              label: 'Sub Link 3',
            },
          ],
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavLink1RoutingModule {}
