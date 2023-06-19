import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginRoutingModule } from "./registro-routing.module";
import { ModalErroModule } from "../util/modal-module/modal-erro/modal-erro.module";

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RegistroComponent } from "./registro.component";

@NgModule({
  declarations: [
    RegistroComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    LoginRoutingModule,

    ModalErroModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,   

    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
  ]  
})
export class RegistroModule { }
