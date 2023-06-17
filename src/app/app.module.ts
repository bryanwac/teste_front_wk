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
    NavegacaoModule,
    DashBoardModule,

    ModalAlertasModule,
    ModalErroModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
