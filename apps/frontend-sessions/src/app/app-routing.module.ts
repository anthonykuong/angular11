import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

export const routes: Routes = [{
  path: '',
  loadChildren: () => import('../../../../libs/profile-update/src/lib/profile-update.module').then(m => m.ProfileUpdateModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
