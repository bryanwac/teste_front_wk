import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { ModalAlertasModule } from './util/modal-module/modal-alertas/modal-alertas.module';
import { ModalErroModule } from './util/modal-module/modal-erro/modal-erro.module';
import { DashBoardModule } from './dashboard/dashboard.module';
import { RegistroModule } from './registro/registro.module';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { AreaDeProcessamentoModule } from './area-de-processamento/area-de-processamento.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    LoginModule,
    RegistroModule,
    NavegacaoModule,
    DashBoardModule,
    AreaDeProcessamentoModule,

    ModalAlertasModule,
    ModalErroModule,
  ],
  providers: [
    authInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
