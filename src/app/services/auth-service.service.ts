import { Injectable } from '@angular/core';
import { OAuthErrorEvent, OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, combineLatest, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject$ = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject$.asObservable();

  private isDoneLoadingSubject$ = new BehaviorSubject<boolean>(false);
  public isDoneLoading$ = this.isDoneLoadingSubject$.asObservable();

  public canActivateProtectedRoutes$: Observable<boolean> = combineLatest([
    this.isAuthenticated$,
    this.isDoneLoading$
  ]).pipe(map(values => values.every(b => b)));

  constructor(
    private oauthService: OAuthService,
    private router: Router,
  ) {
    // Agrupando as subscrições de evento.
    this.oauthService.events.subscribe(event => {
      this.handleOAuthEvent(event);
    });

    // Removido o listener de 'storage' para simplificar, mas pode ser adicionado novamente se necessário.
  }

  private handleOAuthEvent(event: any): void {
    if (event instanceof OAuthErrorEvent) {
      console.error('OAuthErrorEvent Object:', event);
    } else {
      console.warn('OAuthEvent Object:', event);
    }

    this.isAuthenticatedSubject$.next(this.oauthService.hasValidAccessToken());

    if (!this.oauthService.hasValidAccessToken() && ['session_terminated', 'session_error'].includes(event.type)) {
      this.navigateToLoginPage();
    }

    if (event.type === 'token_received') {
      this.oauthService.loadUserProfile();
    }
  }

  private navigateToLoginPage() {
    this.router.navigateByUrl('/should-login');
  }

  public async runInitialLoginSequence(): Promise<void> {
    try {
      await this.oauthService.loadDiscoveryDocument();

      await this.oauthService.tryLogin();

      if (!this.oauthService.hasValidAccessToken()) {
        await this.oauthService.silentRefresh();
      }

      this.isDoneLoadingSubject$.next(true);

      if (this.oauthService.state && this.oauthService.state !== 'undefined' && this.oauthService.state !== 'null') {
        let stateUrl = this.oauthService.state;
        if (stateUrl.startsWith('/') === false) {
          stateUrl = decodeURIComponent(stateUrl);
        }
        // this.router.navigateByUrl(stateUrl);
      }
    } catch (error) {
      console.error('Error running initial login sequence', error);
      this.isDoneLoadingSubject$.next(true);
    }
  }

  public login(targetUrl?: string) {
    try {
      this.oauthService.initLoginFlow(targetUrl || this.router.url);
      // Não há mais necessidade de verificar o token aqui, isso é feito no manipulador de eventos.
    } catch (error) {
      console.error('Error logging in', error);
    }
  }

  public getUser() { return this.oauthService.getIdentityClaims(); }
  public logout() { this.oauthService.logOut(); }
  public refresh() { this.oauthService.silentRefresh(); }
  public hasValidToken() { return this.oauthService.hasValidAccessToken(); }
  public get accessToken() { return this.oauthService.getAccessToken(); }
}
