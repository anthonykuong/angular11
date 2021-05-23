import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule, routes} from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {reducers} from '../store/router.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import { AppComponent } from './app.component';
import {TranslationRootModule} from './module/translation/translation-root.module';
import {LandingComponent} from './landing/landing.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TranslationRootModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    }),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    StoreRouterConnectingModule.forRoot(),
  ],
  declarations: [AppComponent, LandingComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
