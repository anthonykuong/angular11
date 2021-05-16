import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {State} from './router.reducer';
import * as fromSelectors from './router.selectors';

@Injectable({providedIn: 'root'})
export class RouterFacade {

    url$ = this.store.pipe(select(fromSelectors.selectCurrentUrl));

    constructor(private store: Store<State>) {}
}
