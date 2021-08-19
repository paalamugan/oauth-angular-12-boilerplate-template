import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse | ErrorEvent) {

    if (error instanceof HttpErrorResponse) {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`StatusCode: ${error.status}, Message: ${error.error}`);
    } else {
      // A client-side or network error occurred. Handle it accordingly.
      console.error(`An error occurred:' ${error.error?.message}`);
    }

    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

}  