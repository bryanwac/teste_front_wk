import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalErroModule } from "../util/modal-module/modal-erro/modal-erro.module";

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from "@angular/platform-browser";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AreaDeProcessamentoComponent } from "./area-de-processamento.component";
import { AreaDeProcessamentoRoutingModule } from "./area-de-processamento-routing.module";


@NgModule({
  declarations: [
    AreaDeProcessamentoComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,

    AreaDeProcessamentoRoutingModule,

    ModalErroModule,

    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
  ]
})
export class AreaDeProcessamentoModule { }
