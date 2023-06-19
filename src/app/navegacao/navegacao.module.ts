import { NgModule } from '@angular/core';
import { NavegacaoComponent } from './navegacao.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    NavegacaoComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,

    MatButtonModule,
    MatDialogModule,
  ],
  exports: [
    NavegacaoComponent,

    MatButtonModule,
    MatDialogModule,
  ]
})
export class NavegacaoModule { }
