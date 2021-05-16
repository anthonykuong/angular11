import {Component, OnInit} from '@angular/core';
import {IUserProfile} from '@frontend-sessions/models';
import {Observable} from 'rxjs';
import {ProfileUpdateStoreFacade} from '../../../store/facade';

@Component({
  selector: 'frontend-sessions-pu-basic-container',
  templateUrl: './basic-information-container.component.html',
  styleUrls: ['./basic-information-container.component.scss']
})
export class BasicInformationContainerComponent implements OnInit {

  profile$: Observable<IUserProfile>;

  constructor(private store: ProfileUpdateStoreFacade) {}

  ngOnInit(): void {
    this.store.loadProfile();
    this.profile$ = this.store.profile$;
  }

  updateProfile(profile: IUserProfile): void {
    this.store.updateProfile(profile);
  }
}
