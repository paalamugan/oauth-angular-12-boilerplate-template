import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { throwError } from 'rxjs';
import { SessionService } from './session.service';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService {

  constructor(
    private router:Router, 
    private snackbar: SnackbarService,
    private session: SessionService
  ) { }

  handleError(error: HttpErrorResponse) {

    let errMessage = '';
    if (error instanceof Error || error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errMessage = error?.error?.message || error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errMessage = error?.error?.message || error.message;
    }
    
    this.snackbarError(errMessage);
    this.consoleError(error);

    // redirect to login page
    if (error.status === 401) {
      this.handleAuthError();
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  private snackbarError(message: string) {
    if (!message) return;
    this.snackbar.error(message);
  }
  
  private consoleError(error: HttpErrorResponse) {
    if (environment.production) return;
    console.error(error);
  }

  private handleAuthError() {
    this.session.clearSession();
    this.router.navigateByUrl('/login');
  }

}
