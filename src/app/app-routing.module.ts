import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { httpInterceptorProviders } from './core/http-interceptor';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch:'full'
  },
  { 
    path: '', 
    loadChildren: () => import('./modules/auth/auth.module').then(_ => _.AuthModule)
  },
  {
    path: '', 
    loadChildren: () => import('./modules/main/main.module').then(_ => _.MainModule)
  },
  {
    path: '**', 
    redirectTo: '/login', 
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [...httpInterceptorProviders]
})
export class AppRoutingModule { }
