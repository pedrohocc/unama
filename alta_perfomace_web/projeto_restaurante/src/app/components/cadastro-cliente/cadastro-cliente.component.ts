import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})

export class CadastroClienteComponent {
  onSubmit(form:NgForm) {
    if(form.valid) {
      const nome: String = form.value['nome']
      const rua: String = form.value['rua']
      const numero: String = form.value['numero']
      alert(`Nome: ${nome}\nRua: ${rua}\nNumero: ${numero}`)
    } else {
      alert('Preencha todos os campos')
    }
    
  }
}
