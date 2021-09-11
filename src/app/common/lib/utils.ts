import { Observable, Subject, defer, of } from 'rxjs';
import { finalize, delay } from 'rxjs/operators';

export const mockResponse = <T>(
  data: T,
  timeout: number = 1000
): Observable<T> => {
  return of(data).pipe(delay(timeout));
};

export const prepare = <T>(callback: () => void) => {
  return (source: Observable<T>): Observable<T> =>
    defer(() => {
      callback();
      return source;
    });
};

export const indicateLoading = <T>(loading$: Subject<boolean>) => {
  return (source: Observable<T>): Observable<T> =>
    source.pipe(
      prepare(() => loading$.next(true)),
      finalize(() => loading$.next(false))
    );
};
