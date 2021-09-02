import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiRoutes, mockResponse } from '@app/contants';
import { LocalStorageService } from '@app/shared/services/local-storage.service';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { IAuthService } from './auth.service.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements IAuthService {
  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService // private angularFireAuth: AngularFireAuth
  ) {}

  getAuthorizationToken(): string {
    return this.localStorage.get(this.localStorage.session)?.token || '';
  }

  isAuthenticated(): boolean {
    // Check to see if user is authenticated
    return !!this.getAuthorizationToken();
  }

  getSession(): Observable<any> {
    return mockResponse(this.localStorage.get(this.localStorage.session));
  }

  signup(data: any): Observable<any> {
    return mockResponse({
      user: {
        username: data?.username || 'John Doe',
        email: data?.email || 'john.doe@gmail.com',
      },
      token: 'fakeToken1',
    });
  }

  login(data: any): Observable<any> {
    return mockResponse({
      user: {
        username: data?.username || 'John Doe',
        email: `${data?.username?.replace(/\s+/, '')}@gmail.com`,
      },
      token: 'fakeToken1',
    });
  }

  logout(): Observable<any> {
    return of({});
  }

  // googleLogin() {
  //   return this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider().setCustomParameters({
  //     prompt: 'consent'
  //   }));
  // }

  // googleLogout() {
  //   return this.angularFireAuth.auth.signOut();
  // }
}
