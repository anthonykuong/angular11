import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromActions from '../actions';
import {exhaustMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class ProfileUpdateEffect {

  constructor(private actions$: Actions) {}

  updateProfile$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.updateProfile),
    exhaustMap(({profile}) => {
      return of(fromActions.updateProfileSuccess());
    })
  ));
}
