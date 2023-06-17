import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { ModalAlertasModule } from './util/modal-module/modal-alertas/modal-alertas.module';
import { ModalErroModule } from './util/modal-module/modal-erro/modal-erro.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    LoginModule,
    NavegacaoModule,

    ModalAlertasModule,
    ModalErroModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
