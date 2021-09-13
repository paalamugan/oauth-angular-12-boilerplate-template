import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { DashboardWidgetModule } from '../dashboard-widget/dashboard-widget.module';

export const appRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: [
        {
          label: 'Dashboard',
        },
      ],
    },
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    DashboardWidgetModule,
    RouterModule.forChild(appRoutes),
  ],

  exports: [],
  providers: [],
})
export class DashboardModule {}
