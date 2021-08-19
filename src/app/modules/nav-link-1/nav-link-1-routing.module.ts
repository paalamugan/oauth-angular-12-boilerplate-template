import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavLink1Component } from './nav-link1/nav-link1.component';

const routes: Routes = [
  {
    path: '', 
    component: NavLink1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavLink1RoutingModule { }
