import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ModalAlertasComponent } from '../util/modal-module/modal-alertas/modal-alertas.component';
import { ModalErroComponent } from '../util/modal-module/modal-erro/modal-erro.component';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router,
        private dialog: MatDialog) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.authService.buscaPermissoes().pipe(
            map((permissoes: any[]) => {
                if (permissoes && permissoes.length > 0) {
                    return true; // Permite o acesso ao componente
                } else {
                    const data = {
                        mensagem: 'Você não tem acesso a este módulo.'
                    };
                    this.dialog.open(ModalAlertasComponent, { data })
                    this.router.navigate(['/login']);
                    return false;
                }
            }),
            catchError((erro: any) => {
                const data = erro;
                this.dialog.open(ModalErroComponent, { data });
                this.router.navigate(['/login']);
                return of(false);
            })
        );
    }
}
