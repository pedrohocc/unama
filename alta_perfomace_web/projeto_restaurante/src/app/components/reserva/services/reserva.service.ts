import { DatePipe, formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<[]>('https://picturesque-splashy-toucan.glitch.me/reservas');
  }

  createReserva(idCliente: number, data_reserva: Date) {
    const data = moment(data_reserva, 'YYYY-MM-DD HH:MM:SS').format('YYYY-MM-DD HH:mm:ss')
    return this.http.post('https://picturesque-splashy-toucan.glitch.me/reserva', {idCliente, data});
  }

}
