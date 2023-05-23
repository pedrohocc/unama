import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private readonly API = 'https://picturesque-splashy-toucan.glitch.me/cadastro'
  constructor(private http: HttpClient) { }
  
  cadastrar(nome: string , rua: string, numero:string):Observable<any> {
    return this.http.post(this.API, {nome,
      rua, 
      numero})
  }
}
