import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatDialogModule} from '@angular/material/dialog';
import { ModalAlertasComponent } from "./modal-alertas.component";


@NgModule({
  declarations: [
    ModalAlertasComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatDialogModule,
  ],
  
})
export class ModalAlertasModule { 

 }
