import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import {RouterStateUrl} from './router.reducer';

export const getRouterState = createFeatureSelector<
    fromRouter.RouterReducerState<RouterStateUrl>
    >('routerReducer');

const {
    selectQueryParams,    // select the current route query params
    selectQueryParam,     // factory function to select a query param
    selectRouteParams,    // select the current route params
    selectRouteParam,     // factory function to select a route param
    selectRouteData,      // select the current route data
    selectUrl,            // select the current url
} = fromRouter.getSelectors(getRouterState);

export const selectCurrentUrl = createSelector(selectUrl, (state: string) => state);
