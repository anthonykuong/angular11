import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {TranslationRootModule} from './module/translation/translation-root.module';

export const routes: Routes = [{
  path: '',
  loadChildren: () => import('../../../../libs/profile-update/src/lib/profile-update.module').then(m => m.ProfileUpdateModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), TranslateModule, TranslationRootModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
