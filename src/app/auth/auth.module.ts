import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthConfig, OAuthModule, OAuthModuleConfig, OAuthStorage } from 'angular-oauth2-oidc';
import { authAppInitializerFactory } from './auth-app-initializer.factory';
import { authConfig } from './auth-config';
import { authModuleConfig } from './auth-module-config';
import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth-service.service';
import { AuthGuardWithForcedLogin } from './auth-guard-with-forced-login.service';

// We need a factory since localStorage is not available at AOT build time
export function storageFactory(): OAuthStorage {
  return localStorage;
}

@NgModule({
  imports: [
    HttpClientModule,
    OAuthModule.forRoot(),
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthGuardWithForcedLogin,

  ],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        { provide: APP_INITIALIZER, useFactory: authAppInitializerFactory, deps: [AuthService], multi: true },
        { provide: AuthConfig, useValue: authConfig },
        { provide: OAuthModuleConfig, useValue: authModuleConfig },
        { provide: OAuthStorage, useFactory: storageFactory },
      ]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
    if (parentModule) {
      throw new Error('CoreModule já está carregado. Importe-o apenas no AppModule');
    }
  }
}
