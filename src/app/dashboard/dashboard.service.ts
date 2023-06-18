import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const estatistica = environment.API_URL + '/estatistica';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DashBoardService {

  public mostrarPagesEmitter = new EventEmitter<boolean>();

  constructor(
    private http: HttpClient,
  ) { }

  buscaEstatisticas(): Observable<any> {
    return this.http.get(estatistica, httpOptions);
  }
}
