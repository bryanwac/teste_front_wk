import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const AUTH_API = environment.API_URL + 'm';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public mostrarPagesEmitter = new EventEmitter<boolean>();

  constructor(
    private http: HttpClient,
  ) { }

  login(loginRequest: any): Observable<any> {
    return this.http.post(AUTH_API + '/login', { loginRequest });
  }
  registro(registroRequest: any): Observable<any> {
    return this.http.post(AUTH_API + '/registro', { registroRequest });
  }
  buscaPermissoes(): Observable<any> {
    return this.http.get(AUTH_API + '/permissoes')
  }
}
