import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { CadastroService } from './cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})



export class CadastroClienteComponent {
  constructor(
    private router: Router,
    private service: CadastroService) {
    
  }

  onSubmit(form:NgForm) {
    if(form.valid) {
      const nomeUser: string = form.value['nome']
      const ruaUser: string = form.value['rua']
      const numeroUser: string = form.value['numero']
      this.service.cadastrar(nomeUser, ruaUser, numeroUser).subscribe(() => {
        alert('Cliente cadastrado com SUCESSO!');
        location.reload();
      })
    } else {
      alert('Preencha todos os campos');
    }
    
  }
}
