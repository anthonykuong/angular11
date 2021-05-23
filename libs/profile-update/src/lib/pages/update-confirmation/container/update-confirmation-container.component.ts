import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IUserProfile} from '@frontend-sessions/models';
import {ProfileUpdateStoreFacade} from '../../../store/facade';
import {PROFILE_UPDATE_PAGE} from "../../../models/profile-update.models";

@Component({
  selector: 'frontend-sessions-pu-confirmation-container',
  templateUrl: './update-confirmation-container.component.html',
  styleUrls: ['./update-confirmation-container.component.scss']
})
export class UpdateConfirmationContainerComponent implements OnInit {

  profile$: Observable<IUserProfile>;

  constructor(private store: ProfileUpdateStoreFacade) {
  }

  ngOnInit(): void {
    this.store.setPage(PROFILE_UPDATE_PAGE.COMPLETE)
    this.profile$ = this.store.profile$;
  }


}
