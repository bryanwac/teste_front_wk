import { NgModule } from '@angular/core';
import { NavegacaoComponent } from './navegacao.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    NavegacaoComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    NavegacaoComponent,
  ]
})
export class NavegacaoModule { }
