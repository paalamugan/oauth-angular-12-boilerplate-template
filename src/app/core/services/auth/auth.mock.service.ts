import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiRoutes, mockResponse } from '@app/common';
import { LocalStorageService } from '@app/shared/services/local-storage.service';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { IAuthService } from './auth.service.interface';

const fakeData = (data: any) => ({
  user: {
    username: data?.username || (data?.email ? data?.email.split('@')[0] : ''),
    email: data?.email,
  },
  token: 'fakeToken1',
});

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
    return mockResponse(fakeData(data));
  }

  login(data: any): Observable<any> {
    return mockResponse(fakeData(data));
  }

  logout(): Observable<any> {
    return mockResponse({}, 0);
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
