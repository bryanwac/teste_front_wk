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
    private dialog:MatDialog,
    private tokenService: TokenStorageService,
    private router: Router
    ) { }

  openErroDialog(err: any) {
    this.dialog.open(ModalErroComponent, {
      data: err
      });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     let authReq = req;
    const token = this.tokenService.getToken();
    if (token) {
      authReq = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`,
        }
       })
    }
    return next.handle(authReq).pipe(catchError(err => {
      if (err.status == 401 || err.status == 403) {

          this.tokenService.signOut();

      }
      if (err.status == 500) {
        this.tokenService;
        this.tokenService.apagaTokenAndUser()
        this.openErroDialog(err)
        this.router.navigate(["login"]);
    }
      return throwError({ ...err, ...err.error });
    }))

  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
