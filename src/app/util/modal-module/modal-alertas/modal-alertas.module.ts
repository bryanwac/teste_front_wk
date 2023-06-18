import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatDialogModule} from '@angular/material/dialog';
import { ModalAlertasComponent } from "./modal-alertas.component";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    ModalAlertasComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
  ],
  
})
export class ModalAlertasModule { 

 }
