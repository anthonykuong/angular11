import {Component, OnInit} from '@angular/core';
import {IUserProfile} from '@frontend-sessions/models';
import {Observable} from 'rxjs';
import {ProfileUpdateStoreFacade} from '../../../store/facade';

@Component({
  selector: 'frontend-sessions-pu-basic-container',
  templateUrl: './contact-information-container.component.html',
  styleUrls: ['./contact-information-container.component.scss']
})
export class ContactInformationContainerComponent implements OnInit {

  profile$: Observable<IUserProfile>;

  constructor(private store: ProfileUpdateStoreFacade) {}

  ngOnInit(): void {
    this.profile$ = this.store.profile$;
  }

  updateProfile(profile: IUserProfile): void {
    this.store.updateProfile(profile);
  }
}
