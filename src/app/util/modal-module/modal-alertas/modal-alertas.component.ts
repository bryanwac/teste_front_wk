import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-alertas',
  templateUrl: './modal-alertas.component.html',
  styleUrls: ['./modal-alertas.component.scss']
})
export class ModalAlertasComponent implements OnInit {

  public alerta : any;


  constructor(
    private modalAlertasDialogRef: MatDialogRef<ModalAlertasComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { 
    this.alerta = data
  }

  ngOnInit() {
  }

  close(){
    this.modalAlertasDialogRef.close()
  }

}
