import {AuthGuard} from './shared/auth/guard/auth.guard';
import {NoAuthGuard} from './shared/auth/guard/noauth.guard';
import {AdminGuard} from './shared/auth/guard/admin.guard';
import {AgenteGuard} from './shared/auth/guard/agente.guard';
import {OperadorGuard} from './shared/auth/guard/operador.guard';

export const APP_GUARD_PROVIDERS = [
  AuthGuard,
  NoAuthGuard,
  AdminGuard,
  AgenteGuard,
  OperadorGuard
];
