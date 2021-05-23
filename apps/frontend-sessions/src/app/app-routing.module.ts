import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {TranslationRootModule} from './module/translation/translation-root.module';
import {LandingComponent} from './landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
    {
    path: 'profile',
    loadChildren: () => import('../../../../libs/profile-update/src/lib/profile-update.module').then(m => m.ProfileUpdateModule)
  },
  {
    path: 'trivia',
    loadChildren: () => import('../../../../libs/trivia/src/lib/trivia.module').then(m => m.TriviaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TranslateModule, TranslationRootModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
