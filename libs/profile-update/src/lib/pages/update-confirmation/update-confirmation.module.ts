import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UpdateConfirmationContainerComponent} from './container/update-confirmation-container.component';
import {UpdateConfirmationPresentationComponent} from './presentation/update-confirmation-presentation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: UpdateConfirmationContainerComponent}]),
  ],
  declarations: [
    UpdateConfirmationContainerComponent,
    UpdateConfirmationPresentationComponent
  ]
})
export class UpdateConfirmationModule {}
