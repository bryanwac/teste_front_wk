import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PermissionGuard } from './helpers/permission.guard';
import { RegistroComponent } from './registro/registro.component';
import { AreaDeProcessamentoComponent } from './area-de-processamento/area-de-processamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: {
      roles: ["ROLE_USER"]
    }
  },
  {
    path: 'processamento',
    component: AreaDeProcessamentoComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: {
      roles: ["ROLE_USER"]
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
