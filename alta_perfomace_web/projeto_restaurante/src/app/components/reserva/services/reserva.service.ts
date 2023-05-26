import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<[]>('https://picturesque-splashy-toucan.glitch.me/reservas');
  }

  createReserva(idCliente: number, data: Date) {
    return this.http.post('https://picturesque-splashy-toucan.glitch.me/reserva', {idCliente, data});
  }

}
