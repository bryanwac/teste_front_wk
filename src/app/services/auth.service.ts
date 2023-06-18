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

  login(request: any): Observable<any> {
    return this.http.post(AUTH_API + '/login', request );
  }
  registro(request: any): Observable<any> {
    return this.http.post(AUTH_API + '/registro', request );
  }
  buscaPermissoes(): Observable<any> {
    return this.http.get(AUTH_API + '/permissoes')
  }
}
