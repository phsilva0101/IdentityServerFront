import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private oAuth: OAuthService, private router: Router) {}

  intercept(req: any, next: any) {
    const token = this.oAuth.getAccessToken();
    console.log('token', token);
    var headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const modified = req.clone({ setHeaders: headers });
    return next.handle(modified);
  }

  private handleError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401 || err.status === 403 || err.status == 500) {
      this.router.navigateByUrl(`/login`);
      return of(err);
    }

    return throwError(err);
  }
}
