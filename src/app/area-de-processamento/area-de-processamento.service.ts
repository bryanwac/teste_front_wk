import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const pessoa = environment.API_URL + '/pessoa';

@Injectable({
  providedIn: 'root'
})
export class AreaDeProcessamentoService {
  public mostrarPagesEmitter = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {}

  processaArquivo(arquivo: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('arquivo', arquivo, arquivo.name);

    const httpOptions = {
      headers: new HttpHeaders({}),
      responseType: 'text' as const
    };

    return this.http.post(`${pessoa}/arquivo`, formData, httpOptions);
  }

  processaConteudo(conteudo: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as const
    };

    return this.http.post(`${pessoa}/cria-varias`, conteudo, httpOptions);
  }
}
