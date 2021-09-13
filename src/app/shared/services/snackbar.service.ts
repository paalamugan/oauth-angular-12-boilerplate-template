import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Snackbar } from '@app/models/snackbar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar, private zone: NgZone) {}

  open(
    message: string,
    {
      duration = 30000,
      type = 'success',
      verticalPosition = 'top',
      horizontalPosition = 'center',
    }: Snackbar = {}
  ) {
    this.dismiss();

    this.zone.run(() => {
      this.snackBar.open(message, 'Dismiss', {
        duration,
        verticalPosition,
        horizontalPosition,
        data: { message, type },
      });

      // this.snackBar.openFromComponent(SnackbarComponent, {
      //   duration,
      //   verticalPosition,
      //   horizontalPosition,
      //   data: { message, type },
      // });
    });
  }

  dismiss() {
    this.snackBar.dismiss();
  }

  success(message: string, options?: Snackbar) {
    this.open(message, { type: 'succcess', ...options });
  }

  error(message: string, options?: Snackbar) {
    this.open(message, { type: 'error', ...options });
  }

  warn(message: string, options?: Snackbar) {
    this.open(message, { type: 'warn', ...options });
  }

  info(message: string, options?: Snackbar) {
    this.open(message, { type: 'info', ...options });
  }
}
