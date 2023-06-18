import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './../services/auth.service';

import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TokenStorageService } from '../services/token-storage.service';
import { ModalAlertasComponent } from '../util/modal-module/modal-alertas/modal-alertas.component';

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
        const currentRoles = this.authService.buscaPermissoes();
        if (currentRoles) {

            let hasRole = false;

            route.data = {
                ...route.data
            };

            currentRoles.forEach((element: any) => {
                if (route.data['roles'].findIndex((role: any) => role === element.nome) != -1) {
                    hasRole = true;
                }
            });
            if (route.data['roles'] && hasRole) {
                return true;
            } else {

                if (state?.url == '/login') {
                    return true;
                }

                const dialogRef = this.dialog.open(ModalAlertasComponent, {
                    data: {
                        mensagem: "Você não tem acesso a este módulo."
                    }
                })

                dialogRef.afterClosed().subscribe(() => { })

                return false;
            }
        }
        
        this.mostrarMenuEmitter.emit(false);
        this.storageService.signOut();
        return false;
    }
}


