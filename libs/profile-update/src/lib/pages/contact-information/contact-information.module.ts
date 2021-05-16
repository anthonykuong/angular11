import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ContactInformationContainerComponent} from './container/contact-information-container.component';
import {ContactInformationFormComponent} from './presentation/contact-information-form';
import {SharedProfileCommonModule} from "../../shared-profile-common/shared-profile-common.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{path: '', component: ContactInformationContainerComponent}]),
        ReactiveFormsModule,
        SharedProfileCommonModule
    ],
  declarations: [
    ContactInformationContainerComponent,
    ContactInformationFormComponent
  ]
})
export class ContactInformationModule {}
