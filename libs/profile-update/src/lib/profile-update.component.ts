import {Component, OnInit} from '@angular/core';
import {ProfileUpdateStoreFacade} from './store/facade';
import {PROFILE_UPDATE_PAGE} from './models/profile-update.models';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  template: `<router-outlet></router-outlet>`
})
export class ProfileUpdateComponent implements OnInit {

  constructor(private store: ProfileUpdateStoreFacade,
              private router: Router) {
  }

  ngOnInit(): void {
    this.store.page$
      .pipe(
        tap((page: PROFILE_UPDATE_PAGE) => this._routePage(page))
      ).subscribe();
  }

  private _routePage(page: PROFILE_UPDATE_PAGE): void {
    switch (page) {
      case PROFILE_UPDATE_PAGE.BASIC: {
        this.router.navigate(['basic-information']);
        break;
      }
      case PROFILE_UPDATE_PAGE.CONTACT: {
        this.router.navigate(['contact-information']);
        break;
      }
      case PROFILE_UPDATE_PAGE.COMPLETE: {
        this.router.navigate(['confirmation']);
        break;
      }
      default: {break; }
    }
  }
}
