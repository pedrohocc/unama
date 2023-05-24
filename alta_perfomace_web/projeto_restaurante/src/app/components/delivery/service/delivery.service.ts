import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private readonly API = 'https://picturesque-splashy-toucan.glitch.me/pedidos'

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<[]>(this.API);
  }
}
