import {Component, Input, OnInit} from '@angular/core';
import {IUserProfile} from '@frontend-sessions/models';

@Component({
  selector: 'frontend-sessions-pu-confirmation-presentation',
  templateUrl: './update-confirmation-presentation.component.html',
  styleUrls: ['./update-confirmation-presentation.component.scss']
})
export class UpdateConfirmationPresentationComponent implements OnInit {

  @Input()
  profile: IUserProfile;

  constructor() {}

  ngOnInit(): void {
    console.log(this.profile);
  }
}
