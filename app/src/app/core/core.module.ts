import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonApiService } from './api/json-api.service'
import { LayoutService } from '../shared/layout/layout.service'
import { UserService } from '../shared/user/user.service'
import { VoiceControlService } from '../shared/voice-control/voice-control.service'
import { SoundService } from '../shared/sound/sound.service';
import { SkinService } from '../shared/layout/skin/skin.service';
import { BlockUIService } from 'ng-block-ui';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

import { throwIfAlreadyLoaded } from './guards/module-import-guard';
import { VoiceRecognitionService } from '../shared/voice-control/voice-recognition.service';
import { TabsModule, ProgressbarModule, TooltipModule, BsDropdownModule, AlertModule } from 'ngx-bootstrap';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuth } from 'angularfire2/auth'
// import { AuthModule } from '../shared/auth/auth.module';
// import { AuthService } from '../shared/auth/auth.service';

/*export const firebaseConfig = {
  apiKey: 'AIzaSyDN5EwEQCx_kEym8zcbhzHYgFBMdExN2Sc',
  authDomain: 'plexilabs-e2f3f.firebaseapp.com',
  databaseURL: 'https://plexilabs-e2f3f.firebaseio.com',
  projectId: 'plexilabs-e2f3f',
  storageBucket: 'plexilabs-e2f3f.appspot.com',
  messagingSenderId: '685849318441'
};*/

const config: SocketIoConfig = { url: 'http://localhost:8000', options: {} };

@NgModule({
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    SocketIoModule.forRoot(config),
    // AngularFireModule.initializeApp(firebaseConfig)
    // AuthModule
  ],
  declarations: [],
  providers: [
    JsonApiService,
    LayoutService,
    UserService,
    VoiceControlService,
    VoiceRecognitionService,
    SoundService,
    SkinService,
    BlockUIService,
    // AngularFireAuth
    // AuthService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
 }
