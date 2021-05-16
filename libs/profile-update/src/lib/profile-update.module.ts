import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileUpdateRouting} from './profile-update-routing.module';
import {StoreModule} from '@ngrx/store';
import * as fromReducer from './store/reducer';
import {ProfileUpdateComponent} from './profile-update.component';
import {EffectsModule} from '@ngrx/effects';
import {ProfileUpdateEffect} from './store/effects/profile-update.effect';

@NgModule({
  imports: [
    CommonModule,
    ProfileUpdateRouting,
    EffectsModule.forFeature([ProfileUpdateEffect]),
    StoreModule.forFeature(fromReducer.featureKey, fromReducer.reducer),
  ],
  declarations: [ProfileUpdateComponent]
})
export class ProfileUpdateModule {}
