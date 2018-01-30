import {AuthGuard} from './shared/auth/guard/auth.guard';
import {NoAuthGuard} from './shared/auth/guard/noauth.guard';
import {AdminGuard} from './shared/auth/guard/admin.guard';
import {EditorGuard} from './shared/auth/guard/editor.guard';
import {OperadorGuard} from './shared/auth/guard/operador.guard';

export const APP_GUARD_PROVIDERS = [
  AuthGuard,
  NoAuthGuard,
  AdminGuard,
  EditorGuard,
  OperadorGuard
];
