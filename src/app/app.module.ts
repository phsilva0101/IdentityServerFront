import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BlockUIModule } from 'ng-block-ui';
import { BlockUIHttpModule } from 'ng-block-ui/http';
import { MaterialComponentsModule } from './helpers/material.components.module';
import { HttpInterceptorService } from './hooks/useHttpInterceptor';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AuthGuard } from './auth/auth.guard';
import { ShouldLoginComponent } from './pages/Auth/should-login/should-login.component';
import { FallbackComponent } from './pages/Auth/fallback/fallback.component';
import { HomeComponent } from './pages/Home/home/home.component';
import { AuthModule } from './auth/auth.module';
import { HomeUnlockedComponent } from './pages/Home/home-unlocked/home-unlocked.component';
import { AuthCallbackComponent } from './pages/Auth/auth-callback/auth-callback.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { CardComponent } from './components/Card/card/card.component';
import { BreadcrumbComponent } from './components/Breadcrumb/breadcrumb/breadcrumb.component';
import { HeaderComponent } from './components/Header/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    ShouldLoginComponent,
    FallbackComponent,
    HomeComponent,
    HomeUnlockedComponent,
    AuthCallbackComponent,
    SideMenuComponent,
    CardComponent,
    BreadcrumbComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BlockUIModule.forRoot({
      message: '',
    }),
    BlockUIHttpModule.forRoot(),
    MaterialComponentsModule,
    AuthModule.forRoot(),
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpInterceptorService,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
