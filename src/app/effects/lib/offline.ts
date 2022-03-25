import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';
import { createEffect } from '../utils';

@Injectable({ providedIn: 'root' })
export class OfflineEffect {
  constructor(private toast: HotToastService) {}

  offline$ = createEffect(() =>
    fromEvent(window, 'offline').pipe(
      tap(() =>
        this.toast.warning('There is no internet connection', {
          duration: 10000,
        })
      )
    )
  );
}
