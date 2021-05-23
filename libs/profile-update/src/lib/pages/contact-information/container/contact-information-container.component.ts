import {Component, OnInit} from '@angular/core';
import {IUserProfile} from '@frontend-sessions/models';
import {Observable} from 'rxjs';
import {ProfileUpdateStoreFacade} from '../../../store/facade';
import {PROFILE_UPDATE_PAGE} from "../../../models/profile-update.models";

@Component({
  selector: 'frontend-sessions-pu-basic-container',
  templateUrl: './contact-information-container.component.html',
  styleUrls: ['./contact-information-container.component.scss']
})
export class ContactInformationContainerComponent implements OnInit {

  profile$: Observable<IUserProfile>;

  constructor(private store: ProfileUpdateStoreFacade) {}

  ngOnInit(): void {
    this.store.setPage(PROFILE_UPDATE_PAGE.CONTACT)
    this.profile$ = this.store.profile$;
  }

  updateProfile(profile: IUserProfile): void {
    this.store.updateProfile(profile);
  }
}
