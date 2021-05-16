import { NgModule } from '@angular/core';
import {LinksComponent} from './links/links.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {LanguageService} from '../../../../../apps/frontend-sessions/src/app/module/translation/service/language-service';

@NgModule({
  imports: [
    RouterModule,
    TranslateModule
  ],
  exports: [
    LinksComponent
  ],
  declarations: [LinksComponent]
})
export class SharedProfileCommonModule {
  constructor(
      private languageService: LanguageService
  ) {
    this.languageService.init();
  }
}
