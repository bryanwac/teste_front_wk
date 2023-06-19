import { Component } from '@angular/core';
import { AreaDeProcessamentoService } from './area-de-processamento.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalErroComponent } from '../util/modal-module/modal-erro/modal-erro.component';
import { ModalAlertasComponent } from '../util/modal-module/modal-alertas/modal-alertas.component';
import { interval } from 'rxjs';

@Component({
  selector: 'app-area-de-processamento',
  templateUrl: './area-de-processamento.component.html',
  styleUrls: ['./area-de-processamento.component.scss']
})
export class AreaDeProcessamentoComponent {

  constructor(
    private areaDeProcessamentoService: AreaDeProcessamentoService,
    private dialog: MatDialog,
  ) { }

  processingContent: boolean = false;
  disableProcessButton: boolean = false;

  jsonContent: string;
  tempFile: File | null = null;

  handleFileInput(event: any): void {
    this.tempFile = event.target.files[0];
  }

  removeFile(): void {
    this.tempFile = null;
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  processarArquivo(): void {
    if (this.tempFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileContent = reader.result as string;
        this.areaDeProcessamentoService.processaConteudo(fileContent)
          .subscribe({
            next: (response) => {
              const data = {
                mensagem: response
              };
              this.dialog.open(ModalAlertasComponent, { data }).afterClosed().subscribe(() => {
                this.jsonContent = '';
                this.disableProcessButton = true;
                this.processingContent = true;
    
                interval(15000).subscribe(() => {
                  this.disableProcessButton = false;
                  this.processingContent = false;
                });
              });
            },
            error: (error) => {
              const data = error;
              this.dialog.open(ModalErroComponent, { data });
            }
          });
      };
      reader.readAsText(this.tempFile);
    }
  }

  processarConteudo(): void {
    this.processingContent = true;
    this.disableProcessButton = true;

    this.areaDeProcessamentoService.processaConteudo(this.jsonContent)
      .subscribe({
        next: (response) => {
          const data = {
            mensagem: response
          };
          this.dialog.open(ModalAlertasComponent, { data }).afterClosed().subscribe(() => {
            this.jsonContent = '';
            this.disableProcessButton = true;
            this.processingContent = true;

            interval(15000).subscribe(() => {
              this.disableProcessButton = false;
              this.processingContent = false;
            });
          });
        },
        error: (error) => {
          const data = error;
          this.dialog.open(ModalErroComponent, { data });
        }
      });
  }

  isButtonDisabled(): boolean {
    return this.processingContent;
  }  

}
