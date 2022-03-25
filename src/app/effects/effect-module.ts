import { Inject, Injector, NgModule, Type } from '@angular/core';
import { Observable, isObservable } from 'rxjs';
import { EFFECTS_PROVIDERS, isEffect } from './utils';

interface currentProvider {
  [key: string]: (...args: any[]) => Observable<any> | void;
}

@NgModule({})
export class EffectsModule {
  constructor(@Inject(EFFECTS_PROVIDERS) providers: Type<any>[], injector: Injector) {
    for (const provider of providers) {
      const currentProvider: currentProvider = injector.get(provider);

      for (const effectFactory of Object.values(currentProvider))
        if (isEffect(effectFactory)) {
          const factory = effectFactory();

          if (isObservable(factory)) {
            factory.subscribe();
          }
        }
    }
  }

  static register(providers: Type<any>[]) {
    return {
      ngModule: EffectsModule,
      providers: [
        {
          provide: EFFECTS_PROVIDERS,
          useValue: providers,
        },
      ],
    };
  }
}
