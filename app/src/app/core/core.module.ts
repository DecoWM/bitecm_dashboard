import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonApiService } from './api/json-api.service'
import { LayoutService } from '../shared/layout/layout.service'
import { UserService } from '../shared/user/user.service'
import { VoiceControlService } from '../shared/voice-control/voice-control.service'
import { SoundService } from '../shared/sound/sound.service';
import { SkinService } from '../shared/layout/skin/skin.service';
import { BlockUIService } from 'ng-block-ui';

import { throwIfAlreadyLoaded } from './guards/module-import-guard';
import { VoiceRecognitionService } from '../shared/voice-control/voice-recognition.service';
import { TabsModule, ProgressbarModule, TooltipModule, BsDropdownModule, AlertModule } from 'ngx-bootstrap';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuth } from 'angularfire2/auth'
// import { AuthModule } from '../shared/auth/auth.module';
// import { AuthService } from '../shared/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    SocketIoModule.forRoot({ url: 'https://notificacion.bitel.com.pe:8000', options: {} }),
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
