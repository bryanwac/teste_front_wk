import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './../services/auth.service';

import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TokenStorageService } from '../services/token-storage.service';
import { ModalAlertasComponent } from '../util/modal-module/modal-alertas/modal-alertas.component';
import { catchError, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PermissionGuard implements CanActivate {

    public mostrarMenuEmitter = new EventEmitter<boolean>();

    constructor(
        private location: Location,
        private router: Router,
        private dialog: MatDialog,
        private authService: AuthService,
        private storageService: TokenStorageService,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.buscaPermissoes().pipe(
          map((permissoesUsuario: any[]) => {
            console.log(permissoesUsuario);
        
            let possuiPermissao = false;
        
            route.data = {
              ...route.data
            };
        
            permissoesUsuario.forEach((element: any) => {
              if (route.data['roles'].findIndex((role: any) => role === element.nome) !== -1) {
                possuiPermissao = true;
              }
            });
        
            if (route.data['roles'] && possuiPermissao) {
              return true;
            } else {
              if (state?.url == '/login') {
                return true;
              }
        
              const dialogRef = this.dialog.open(ModalAlertasComponent, {
                data: {
                  mensagem: "Você não tem acesso a este módulo."
                }
              });
        
              dialogRef.afterClosed().subscribe(() => { });
        
              return false;
            }
          }),
          catchError(() => {
            this.mostrarMenuEmitter.emit(false);
            this.storageService.signOut();
            return of(false);
          })
        );
      }      
}


