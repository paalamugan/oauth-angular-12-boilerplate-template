import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

export interface Snackbar { 
  type?: string,
  duration?: number,
  verticalPosition?: MatSnackBarVerticalPosition,
  horizontalPosition?: MatSnackBarHorizontalPosition,
  action?: string
}