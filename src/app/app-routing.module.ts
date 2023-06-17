import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
