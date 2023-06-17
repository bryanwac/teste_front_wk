import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor( private router: Router) { }

  signOut(): void {
    window.sessionStorage.clear();
    window.localStorage.clear();
    this.router.navigate(['/login'])
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public apagaTokenAndUser(): void {
    window.sessionStorage.clear();
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
}
