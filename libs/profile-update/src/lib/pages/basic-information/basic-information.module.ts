import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BasicInformationContainerComponent} from './container/basic-information-container.component';
import {BasicInformationFormComponent} from './presentation/basic-information-form';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedProfileCommonModule} from '../../shared-profile-common/shared-profile-common.module';
import {TranslateModule} from '@ngx-translate/core';
import {LanguageService} from '../../../../../../apps/frontend-sessions/src/app/module/translation/service/language-service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: BasicInformationContainerComponent}]),
    TranslateModule,
    ReactiveFormsModule,
    SharedProfileCommonModule,
  ],
  declarations: [
    BasicInformationContainerComponent,
    BasicInformationFormComponent
  ]
})
export class BasicInformationModule {
  constructor(
      private languageService: LanguageService
  ) {
    this.languageService.init();
  }
}
