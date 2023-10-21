import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ShouldLoginComponent } from './pages/Auth/should-login/should-login.component';
import { FallbackComponent } from './pages/Auth/fallback/fallback.component';
import { HomeComponent } from './pages/Home/home/home.component';
import { HomeUnlockedComponent } from './pages/Home/home-unlocked/home-unlocked.component';
import { AuthCallbackComponent } from './pages/Auth/auth-callback/auth-callback.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeUnlockedComponent,
  },

  {
    path: 'should-login',
    component: ShouldLoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: { breadcrumb: 'Página Inicial' },
  },

  { path: 'auth-callback', component: AuthCallbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
