import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalErroComponent } from '../util/modal-module/modal-erro/modal-erro.component';
import { ModalAlertasComponent } from '../util/modal-module/modal-alertas/modal-alertas.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({
    nome : new FormControl(null, [Validators.required]),
	  sobrenome : new FormControl(null, [Validators.required]),
    email: new FormControl(null,[Validators.required, Validators.minLength(8)]),
    senha: new FormControl(null, [Validators.required]),
	  cpf : new FormControl(null, [Validators.required]),
	  telefone : new FormControl(null, [Validators.required]),
  })

  errorMessage = '';
  roles: string[] = [];
  showAdminBoard = false;
  showUserBoard = false;
  username?: string;

  permissoes: any[] = [];

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
  }

  registroRequest(): void {
    const registroRequest = this.formulario.value;
    console.log(registroRequest)

    this.authService.registro(registroRequest)
    .subscribe({
      next: (_) => {
        const data = {
          message: 'Cadastro realizado, encaminhando para tela de Login...'
        }
        this.dialog.open(ModalAlertasComponent, { data })
        this.router.navigate(['/login'])
        
        
      },
      error: (error: any) => {
        const data = error;
        this.dialog.open(ModalErroComponent, { data });
      }
    })
  }

}
