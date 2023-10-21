import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ShouldLoginComponent } from './pages/Auth/should-login/should-login.component';
import { FallbackComponent } from './pages/Auth/fallback/fallback.component';
import { HomeComponent } from './pages/Home/home/home.component';
import { HomeUnlockedComponent } from './pages/Home/home-unlocked/home-unlocked.component';
import { AuthCallbackComponent } from './pages/Auth/auth-callback/auth-callback.component';
import { ListarAgendamentosComponent } from './pages/Gerencial/Agendamentos/listar-agendamentos/listar-agendamentos.component';
import { ListarPagamentosComponent } from './pages/Gerencial/Pagamento/listar-pagamentos/listar-pagamentos.component';
import { BuscarSedesComponent } from './pages/Explorar/Sedes/buscar-sedes/buscar-sedes.component';

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
  {
    path: 'meus-agendamentos',
    component: ListarAgendamentosComponent,
    canActivate: [AuthGuard],
    data: { breadcrumb: 'Meus Agendamentos' },
  },
  {
    path: 'meus-pagamentos',
    component: ListarPagamentosComponent,
    canActivate: [AuthGuard],
    data: { breadcrumb: 'Meus Pagamentos' },
  },
  {
    path: 'buscar-sedes',
    component: BuscarSedesComponent,
    canActivate: [AuthGuard],
    data: { breadcrumb: 'Buscar Sedes' },
  },

  { path: 'auth-callback', component: AuthCallbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
