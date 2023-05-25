import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }

  getAllDelivery() {
    return this.http.get<[]>('https://picturesque-splashy-toucan.glitch.me/delivery');
  }

  getAllClientes() {
    return this.http.get<[]>('https://picturesque-splashy-toucan.glitch.me/clientes');
  }

  createPedido(idCliente: string, item: string) {
    return this.http.post('https://picturesque-splashy-toucan.glitch.me/pedido', {
      idCliente, 
      item
    });
  }
}
