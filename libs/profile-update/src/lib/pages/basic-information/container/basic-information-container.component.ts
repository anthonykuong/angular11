import {Component, OnInit} from '@angular/core';
import {IUserProfile} from '@frontend-sessions/models';
import {Observable} from 'rxjs';
import {ProfileUpdateStoreFacade} from '../../../store/facade';
import {TranslateService} from '@ngx-translate/core';
import {tap} from 'rxjs/operators';
import {PROFILE_UPDATE_PAGE} from "../../../models/profile-update.models";

@Component({
  selector: 'frontend-sessions-pu-basic-container',
  templateUrl: './basic-information-container.component.html',
  styleUrls: ['./basic-information-container.component.scss']
})
export class BasicInformationContainerComponent implements OnInit {

  profile$: Observable<IUserProfile>;

  constructor(private store: ProfileUpdateStoreFacade, private translateService: TranslateService) {}

  ngOnInit(): void {

    this.store.setPage(PROFILE_UPDATE_PAGE.BASIC)
    this.store.isExistingForm$.pipe(
        tap( (isExisting) => {
            if (!isExisting) {
              this.store.loadProfile();
            }
        }),
    ).subscribe();
    this.profile$ = this.store.profile$;
  }

  updateProfile(profile: IUserProfile): void {
    this.store.updateProfile(profile);
  }
}
