import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; // deprecated
import { HttpClientModule } from '@angular/common/http';

/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './app.routing';
import { AuthService } from './shared/auth/auth.service';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_INTERCEPTOR_PROVIDERS } from './app.interceptor';
import { APP_GUARD_PROVIDERS } from './app.guard';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';

// Core providers
import { CoreModule } from './core/core.module';
import { SmartadminLayoutModule } from './shared/layout/layout.module';
import { BlockUIModule } from 'ng-block-ui';

// Application wide providers
const APP_PROVIDERS = [
  AuthService,
  ...APP_INTERCEPTOR_PROVIDERS,
  ...APP_GUARD_PROVIDERS,
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

/* type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
}; */

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule, // deprecated
    CoreModule,
    SmartadminLayoutModule,
    BlockUIModule,
    routing
  ],
  exports: [
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}
}

