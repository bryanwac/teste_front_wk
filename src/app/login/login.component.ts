import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalErroComponent } from '../util/modal-module/modal-erro/modal-erro.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.required, Validators.minLength(8)]),
    senha: new FormControl(null, [Validators.required])
  })

  isLoggedIn = false;
  isLoginFailed = false;
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

  loginRequest(): void {
    const loginRequest = this.formulario.value;

    this.authService.login(loginRequest)
    .subscribe({
      next: (auth) => {
        this.tokenStorage.saveToken(auth.token);
        // A camada de segurança e autenticação garante que
        // o proximo passo será dado apenas se o usuário possuir permissão de acesso
        this.router.navigate(['/dashboard']);
      },
      error: (error: any) => {
        const data = error;
        this.dialog.open(ModalErroComponent, { data });
      }
    })
  }

  redirecionarParaRegistro() {
    this.router.navigate(['/registro'])
  }

}
