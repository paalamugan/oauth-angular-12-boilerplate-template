import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { AngularMaterialModule } from '@app/core/modules/angular-material.module';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';

@NgModule({
  declarations: [
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }
  ],
  entryComponents: [SnackbarComponent]
})
export class SharedModule { }
