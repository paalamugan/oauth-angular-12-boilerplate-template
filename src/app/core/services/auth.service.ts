import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiRoutes } from '@app/contants';
import { LocalStorageService } from '@app/shared/services/local-storage.service';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    // private angularFireAuth: AngularFireAuth
    ) { }

  getAuthorizationToken(): string {
    return this.localStorage.get(this.localStorage.session)?.token || null;
  }

  isAuthenticated(): boolean {
    // Check to see if user is authenticated
    return !!this.getAuthorizationToken();
  }

  getSession(): Observable<any> {
    return this.http.get(apiRoutes.AUTH.SESSION_ME);
  }

  signup(data: any): Observable<any> {
    // return this.http.post(apiRoutes.AUTH.SIGNUP, data);
    return of({
      user: {
        username: data.username || 'John Doe',
        email: data.email || 'john.doe@gmail.com'
      },
      token: 'fakeToken1'
    });
  }

  login(data: any): Observable<any> {
    // return this.http.post(apiRoutes.AUTH.LOGIN, data);
    return of({
      user: {
        username: data.username || 'John Doe',
        email: 'john.doe@gmail.com'
      },
      token: 'fakeToken1'
    });
  }

  logout(): Observable<any> {
    // return this.http.get(apiRoutes.AUTH.LOGOUT);
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