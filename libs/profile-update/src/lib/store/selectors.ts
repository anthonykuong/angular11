import {createFeatureSelector, createSelector} from '@ngrx/store';
import {featureKey, IProfileUpdateState} from './reducer';

const state = createFeatureSelector(featureKey);

export const isLoading = createSelector(state, (state: IProfileUpdateState) => state.isLoading);
export const profile = createSelector(state, (state: IProfileUpdateState) => state.profile);
export const error = createSelector(state, (state: IProfileUpdateState) => state.error);
export const page = createSelector(state, (state: IProfileUpdateState) => state.page);
