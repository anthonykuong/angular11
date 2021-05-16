import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BasicInformationContainerComponent} from './container/basic-information-container.component';
import {BasicInformationFormComponent} from './presentation/basic-information-form';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: BasicInformationContainerComponent}]),
    ReactiveFormsModule
  ],
  declarations: [
    BasicInformationContainerComponent,
    BasicInformationFormComponent
  ]
})
export class BasicInformationModule {}
