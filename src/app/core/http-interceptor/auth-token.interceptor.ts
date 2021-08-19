import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { environment } from '@env/environment';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (!this.isValidAuth(request)) {
      return next.handle(request);
    }

    // Get the auth token from the service.
    const authToken = this.auth.getAuthorizationToken();
    // Clone the request and set the new header in one step.
    const authReq = request.clone({ setHeaders: { Authorization: `Bearer ${authToken}` } });
    // send cloned request with header to the next handler.
    return next.handle(authToken ? authReq : request);
  }

  isValidAuth(request: HttpRequest<unknown>) {
    return request.url.includes(environment.API_END_POINT);
  }
}
