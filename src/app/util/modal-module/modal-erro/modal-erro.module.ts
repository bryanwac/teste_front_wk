import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatDialogModule} from '@angular/material/dialog';
import { ModalErroComponent } from "./modal-erro.component";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    ModalErroComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
  ]
  
})
export class ModalErroModule { 

 }
