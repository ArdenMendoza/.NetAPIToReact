import { filter, mergeMap, switchMap, map, debounceTime } from 'rxjs/operators';

export const logInEpic = action$ => 
action$.pipe(
    filter(a => a.type === 'BO_LOAD'),
);