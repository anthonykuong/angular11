import {Component, Input, OnInit} from '@angular/core';
import {IUserProfile} from '@frontend-sessions/models';
import {PROFILE_UPDATE_PAGE} from "../../../models/profile-update.models";
import {ProfileUpdateStoreFacade} from "../../../store/facade";

@Component({
  selector: 'frontend-sessions-pu-confirmation-presentation',
  templateUrl: './update-confirmation-presentation.component.html',
  styleUrls: ['./update-confirmation-presentation.component.scss']
})
export class UpdateConfirmationPresentationComponent implements OnInit {

  @Input()
  profile: IUserProfile;

  constructor(private store: ProfileUpdateStoreFacade) {}

  ngOnInit(): void {
    console.log(this.profile);
  }

  back() {
    this.store.setPage(PROFILE_UPDATE_PAGE.CONTACT)
  }
}
