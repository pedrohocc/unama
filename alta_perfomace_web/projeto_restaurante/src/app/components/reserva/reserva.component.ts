import { DatePipe, Time } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReservaService } from './services/reserva.service';
import { CadastroService } from '../cadastro-cliente/cadastro.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  listaReserva: [] = []
  listaClientes: [] = []
  constructor(
    private serviceCliente: CadastroService,
    private service: ReservaService
    ) {}

  ngOnInit() {
    this.serviceCliente.getAll().subscribe((element) => {
      this.listaClientes = element
    })

    this.service.getAll().subscribe((element) => {
      this.listaReserva = element
    })
  }

  onSubmit(form: NgForm) {
    if(form.valid) {
      const dataHoje: Date = new Date();
      const inputIdCliente: number =  form.value['cliente']
      const inputDataUser: string =  form.value['data']
      const dataUser: Date = new Date(inputDataUser)

      const dataValidada = this.validarData(dataHoje, dataUser)
      const horaValidada = this.validarHora(dataHoje, dataUser)
      const isDiaFuncionamento = this.validarDiaSemana(dataUser)
      
      
      if(dataValidada && horaValidada && isDiaFuncionamento) {
        this.service.createReserva(inputIdCliente, dataUser).subscribe(() => {
          alert('Reservado!')
          location.reload()
        })
      } else {
        alert('data ou horario inválido')
      }
      
    } else {
      alert('Preencha todos os campos')
    }
  }

  validarData(dataHoje: Date, dataUser: Date) {
    const result: boolean = dataUser >= dataHoje
    return result
  }

  validarHora(horaAtual: Date, horaUser: Date): boolean {
    let horaValidator: boolean = false

    if(horaUser.getHours() >= horaAtual.getHours()) {
      horaValidator = horaUser.getHours() >= 12 && horaUser.getHours() < 23
      return horaValidator
    } else {
      return false
    }
    
  }

  validarDiaSemana(data: Date) {
    const result: boolean = data.getDay() != 0
    return result 
  }
}
