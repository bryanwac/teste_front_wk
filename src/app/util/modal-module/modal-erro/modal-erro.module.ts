import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatDialogModule} from '@angular/material/dialog';
import { ModalErroComponent } from "./modal-erro.component";


@NgModule({
  declarations: [
    ModalErroComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatDialogModule,
  ],
  
})
export class ModalErroModule { 

 }
