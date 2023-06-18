import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, throwError } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
import { ModalErroComponent } from '../util/modal-module/modal-erro/modal-erro.component';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private dialog: MatDialog,
    private tokenService: TokenStorageService,
    private router: Router
  ) { }

  openErroDialog(err: any) {
    this.dialog.open(ModalErroComponent, {
      data: err
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isLoginOrRegistro = req.url.includes('/login') || req.url.includes('/registro');

    if (isLoginOrRegistro) {
      return next.handle(req);
    }

    let authReq = req;
    const token = this.tokenService.getToken();

    if (token) {
      authReq = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`,
        }
      });
    }

    return next.handle(authReq).pipe(
      catchError(err => {
        this.openErroDialog(err);
        return throwError(err);
      })
    );
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
