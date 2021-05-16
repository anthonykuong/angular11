import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ContactInformationContainerComponent} from './container/contact-information-container.component';
import {ContactInformationFormComponent} from './presentation/contact-information-form';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ContactInformationContainerComponent}]),
    ReactiveFormsModule
  ],
  declarations: [
    ContactInformationContainerComponent,
    ContactInformationFormComponent
  ]
})
export class ContactInformationModule {}
