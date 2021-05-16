import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UpdateConfirmationContainerComponent} from './container/update-confirmation-container.component';
import {UpdateConfirmationPresentationComponent} from './presentation/update-confirmation-presentation.component';
import {SharedProfileCommonModule} from '../../shared-profile-common/shared-profile-common.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: UpdateConfirmationContainerComponent}]),
    SharedProfileCommonModule,
  ],
  declarations: [
    UpdateConfirmationContainerComponent,
    UpdateConfirmationPresentationComponent
  ]
})
export class UpdateConfirmationModule {}
