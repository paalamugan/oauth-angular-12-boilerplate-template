import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const EFFECT = Symbol('EFFECT');
export const EFFECTS_PROVIDERS = new InjectionToken('EFFECTS_PROVIDERS');

export function isEffect(effect: any) {
  return effect[EFFECT];
}

export function createEffect<T>(source: () => Observable<T> | void) {
  Object.defineProperty(source, EFFECT, { value: true });
  return source;
}
