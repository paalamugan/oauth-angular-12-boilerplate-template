import { Injectable } from '@angular/core';
import { Session } from '@app/models/session';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _session = new BehaviorSubject<Session | unknown>(null);

  constructor(private localStorage: LocalStorageService) {
    let sessionData = this.localStorage.get(this.localStorage.session);
    if(sessionData) {
      this._session.next(sessionData);
    }
  }

  getSession() {
    return this._session.asObservable();
  }

  setSession(data: any) {
    this._session.next(data);
    this.localStorage.set(this.localStorage.session, data);
  }

  clearSession() {
    this._session.next(null);
    this.localStorage.remove(this.localStorage.session);
  }
}
