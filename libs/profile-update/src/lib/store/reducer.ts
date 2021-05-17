import {Action, createReducer, on} from '@ngrx/store';
import * as fromActions from './actions';
import {IFeatureState, IUserProfile} from '@frontend-sessions/models';
import {InitialUserProfile, PROFILE_UPDATE_PAGE} from '../models/profile-update.models';

export const featureKey = 'profile-update';

export interface IProfileUpdateState extends IFeatureState {
  profile: IUserProfile;
  page: PROFILE_UPDATE_PAGE;
  isExistingForm: false;
}

export const initialState: IProfileUpdateState = {
  profile: InitialUserProfile,
  page: PROFILE_UPDATE_PAGE.BASIC,
  isLoading: false,
  isExistingForm: false,
};

export const profileUpdateReducer = createReducer(
  initialState,
  on(fromActions.loadProfile, (state) => ({
    ...initialState,
    isExistingForm: true,
  })),
  on(fromActions.updateProfile, (state, {profile}) => ({
    ...state,
    profile,
    isLoading: true
  })),
  on(fromActions.updateProfileSuccess, (state) => ({
    ...state,
    page: state.page + 1,
    isLoading: false,
  })),
  on(fromActions.updateProfileFailure, (state, {error}) => ({
    ...state,
    error,
    isLoading: false,
  })),
);

export function reducer(state: IProfileUpdateState | undefined, action: Action) {
  return profileUpdateReducer(state, action);
}
