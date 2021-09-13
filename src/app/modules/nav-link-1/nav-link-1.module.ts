import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavLink1RoutingModule } from './nav-link-1-routing.module';
import { NavSubLink1Component } from './nav-sub-link1/nav-sub-link1.component';
import { NavSubLink2Component } from './nav-sub-link2/nav-sub-link2.component';
import { NavSubLink3Component } from './nav-sub-link3/nav-sub-link3.component';
import { NavLink1Component } from './nav-link1/nav-link1.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    NavLink1Component,
    NavSubLink1Component,
    NavSubLink2Component,
    NavSubLink3Component,
  ],
  imports: [CommonModule, FlexLayoutModule, NavLink1RoutingModule],
})
export class NavLink1Module {}
