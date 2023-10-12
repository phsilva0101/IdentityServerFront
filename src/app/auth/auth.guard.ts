import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '../services/auth-service.service';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthGuard  {
  constructor(private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    console.log('AuthGuard#canActivate called')
    return this.authService.canActivateProtectedRoutes$.pipe(
      tap((x) =>
        console.log(
          'Você tentou ir para  ' + state.url + ' e esse guarda disse ' + x
        )
      )
    );
  }
}
