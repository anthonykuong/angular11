import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {IUserProfile} from '@frontend-sessions/models';
import {AbstractForm} from '@frontend-sessions/abstractions';
import {Validators} from '@angular/forms';

@Component({
  selector: 'frontend-sessions-pu-presentation-form',
  templateUrl: './basic-information-form.html',
  styleUrls: ['./basic-information-form.scss']
})
export class BasicInformationFormComponent extends AbstractForm {

  @Input() profile: IUserProfile;
  @Output() event = new EventEmitter<IUserProfile>();
  modelEvent: any;

  constructor(injector: Injector) {
    super(injector);
  }

  initForm(): void {
    this.modelEvent = this.profile;
    this.formEvent = this.formBuilder.group({
      firstName: [this.modelEvent.firstName, Validators.required],
      lastName: [this.modelEvent.lastName, Validators.required]
    });
  }

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

}
