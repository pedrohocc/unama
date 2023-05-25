import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<[]>('https://picturesque-splashy-toucan.glitch.me/delivery');
  }

  createPedido(idCliente: string, item: string) {
    return this.http.post('https://picturesque-splashy-toucan.glitch.me/pedido', {
      idCliente, 
      item
    });
  }
}
