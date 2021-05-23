import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileUpdateComponent} from './profile-update.component';

const routes: Routes = [{
  path: '',
  component: ProfileUpdateComponent,
  children: [
    {
      path: 'basic-information',
      loadChildren: () => import('../lib/pages/basic-information/basic-information.module').then(m => m.BasicInformationModule)
    }, {
      path: 'contact-information',
      loadChildren: () => import('../lib/pages/contact-information/contact-information.module').then(m => m.ContactInformationModule)
    }, {
    path: 'confirmation',
      loadChildren: () => import('../lib/pages/update-confirmation/update-confirmation.module').then(m => m.UpdateConfirmationModule)
    },
    {path: '', redirectTo: 'basic-information', pathMatch: 'full'}
  ]
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileUpdateRouting {
}
