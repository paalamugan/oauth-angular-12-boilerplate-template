import { Observable } from 'rxjs';

export interface IAuthService {
  getAuthorizationToken(): string;
  isAuthenticated(): boolean;
  getSession(): Observable<any>;
  signup(data: any): Observable<any>;
  login(data: any): Observable<any>;
  logout(): Observable<any>;
}
