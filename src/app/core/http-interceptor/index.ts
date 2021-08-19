import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthTokenInterceptor } from './auth-token.interceptor';
// import { HttpErrorInterceptor } from './http-error.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
// { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }, // No need to use this provider because global-error-handler service handle all the errors
];
