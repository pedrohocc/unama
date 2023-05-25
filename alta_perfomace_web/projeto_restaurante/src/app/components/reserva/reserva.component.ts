import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  onSubmit(form: NgForm) {
    if(form.valid) {
      let dataHoje: Date = new Date();
      const dataUser: string =  form.value['data']
      const horaUser: string =  form.value['hora']

      const datasFormatadas: [string, string] = this.formatarDatas(dataHoje, dataUser)

      const dataValidada = this.validarData(datasFormatadas)
      const horaValidada = this.validarHora(horaUser)
      const isDiaUtil = this.isDiaUtil(dataUser)

      if(dataValidada && horaValidada && isDiaUtil) {
        alert('correto')
      } else {
        alert('data ou horario inválido')
      }
      
    } else {
      alert('Preencha todos os campos')
    }
  }

  formatarDatas(dataHoje: Date, dataUser: String): [string, string] {
    const dataHojeFormatada: string = dataHoje.toLocaleDateString('pt-BR').split('/').join('-');
    const dataUserFormatada: string = dataUser.split('-').reverse().join('-')
    return [dataHojeFormatada, dataUserFormatada]
  }

  validarData(dataHojeAndDataUser: [string, string]) {
    const result = dataHojeAndDataUser[1] >= dataHojeAndDataUser[0]
    return result
  }

  validarHora(horaUser: string): boolean {
    const horaValidator: boolean = horaUser >= '12:00' && horaUser < '23:00'
    return horaValidator
  }

  isDiaUtil(data: string) {
    const dataValidar: Date = new Date(data)
    const result: boolean = (dataValidar.getDay() + 1) != 7
    return result 
  }
}
