import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  session: string = 'SESSION_INFO';

  constructor() { }

  private prefix: string = environment.APP_NAME + '_';

  private getStorageName(name: string): string {
    return this.prefix + name;
  }

  set(name: string, data: any): any {
    name = this.getStorageName(name);
    let stringify = JSON.stringify(data);
    return localStorage.setItem(name, stringify);
  }

  get(name: string): any {
    name = this.getStorageName(name);
    let item = localStorage.getItem(name) as any;
    return JSON.parse(item);
  }

  remove(name: string) {
    name = this.getStorageName(name);
    localStorage.removeItem(name);
  }

  clearAll() {
    localStorage.clear();
  }

}
