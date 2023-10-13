import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from './configuration/appConfig';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { AuthService } from './services/auth-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'IdentityServerFront';

  constructor(private router: Router, private authService: AuthService) {}

  isUserLoggedIn(): boolean {
    return this.authService.hasValidToken();
  }
}
