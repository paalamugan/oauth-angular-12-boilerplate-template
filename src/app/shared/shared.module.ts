import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { AngularMaterialModule } from '@app/core/modules/angular-material.module';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SnackbarComponent, BreadcrumbComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
  ],
  exports: [BreadcrumbComponent],
  entryComponents: [SnackbarComponent],
})
export class SharedModule {}
