import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {IUserProfile} from '@frontend-sessions/models';
import {AbstractForm} from '@frontend-sessions/abstractions';
import {Validators} from '@angular/forms';
import {PROFILE_UPDATE_PAGE} from "../../../models/profile-update.models";

@Component({
  selector: 'frontend-sessions-pu-contact-presentation-form',
  templateUrl: './contact-information-form.html',
  styleUrls: ['./contact-information-form.scss']
})
export class ContactInformationFormComponent extends AbstractForm {

  @Input() profile: IUserProfile;
  @Output() event = new EventEmitter<IUserProfile>();
  modelEvent: any;

  constructor(injector: Injector) {
    super(injector);
  }

  initForm(): void {
    this.modelEvent = this.profile;
    this.formEvent = this.formBuilder.group({
      email: [this.modelEvent.email],
      phoneNumber: [this.modelEvent.phoneNumber]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.formEvent.controls; }

  submitData(): void {
    const model = Object.assign({}, this.modelEvent);
    const form = Object.assign({}, this.raw);
    const value = Object.assign(model, form);
    this.event.emit(value);
  }

  setEvent(): void {
  }

  submissionError(err: string): void {
  }

  back() {
    this.store.setPage(PROFILE_UPDATE_PAGE.BASIC)
  }
}
