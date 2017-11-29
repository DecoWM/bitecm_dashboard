import {NgModule} from '@angular/core';
import {routing} from './agencia.routing';

import { SubAgenciasService } from './shared/subagencias.service';

@NgModule({
  declarations: [],
  imports: [
    routing
  ],
  providers: [SubAgenciasService]
})
export class AgenciaModule {}
