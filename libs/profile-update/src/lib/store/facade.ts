import {Injectable} from '@angular/core';
import {IProfileUpdateState} from './reducer';
import {select, Store} from '@ngrx/store';
import * as fromActions from './actions';
import * as fromSelectors from './selectors';
import {IUserProfile} from '@frontend-sessions/models';

@Injectable({providedIn: 'root'})
export class ProfileUpdateStoreFacade {

  isLoading$ = this.store.pipe(select(fromSelectors.isLoading));
  isExistingForm$ = this.store.pipe(select(fromSelectors.isExistingForm));
  profile$ = this.store.pipe(select(fromSelectors.profile));
  page$ = this.store.pipe(select(fromSelectors.page));

  constructor(private store: Store<IProfileUpdateState>) {}

  loadProfile(): void {
    this.store.dispatch(fromActions.loadProfile());
  }

  setPage( page):void{
    this.store.dispatch(fromActions.setPage({page}));
  }

  updateProfile(profile: IUserProfile): void {
    this.store.dispatch(fromActions.updateProfile({profile}));
  }
}
