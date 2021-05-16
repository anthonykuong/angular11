import {createAction, props} from '@ngrx/store';
import {IUserProfile} from '@frontend-sessions/models';

export const loadType = (name: string) => `[Profile Update] ${name}`;

export const loadProfile = createAction(
  loadType('loaded profile')
);

export const updateProfile = createAction(
  loadType('updating profile'),
  props<{ profile: IUserProfile }>()
);

export const updateProfileSuccess = createAction(
  loadType('update profile success'),
);

export const updateProfileFailure = createAction(
  loadType('update profile failure'),
  props<{ error: any }>()
);

