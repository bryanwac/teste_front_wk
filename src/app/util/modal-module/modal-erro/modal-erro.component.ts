import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-erro-enviado',
  templateUrl: './modal-erro.component.html',
  styleUrls: ['./modal-erro.component.scss']
})
export class ModalErroComponent implements OnInit {

  public erro: any;

  constructor(
    private tokenStorageService: TokenStorageService,
    public dialog: MatDialogRef<ModalErroComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) { 
    this.erro = data
  }

  ngOnInit(): void {
  }

  close() {
    if (this.erro.status === 401) {
      this.tokenStorageService.signOut();
    }
    this.dialog.close();
  }

}
