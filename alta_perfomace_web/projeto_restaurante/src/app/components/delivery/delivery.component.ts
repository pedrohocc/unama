import { Component } from '@angular/core';
import { DeliveryService } from './service/delivery.service';
import { NgForm } from '@angular/forms';
import { CadastroService } from '../cadastro-cliente/cadastro.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {
  listaDelivery: [] = [];
  listaCliente: [] = [];
  constructor(
    private serviceCliente: CadastroService,
    private service:DeliveryService
    ) {}

  onSubmit(form: NgForm) {
    if(form.valid) {
      const idCliente: string = form.value['cliente']
      const quantidadePizza: number = form.value['pizza'] 
      const quantidadeHamburguer: number = form.value['hamburguer']
      const quantidadeSuco: number = form.value['suco']
      const quantidadeRefrigerante: number = form.value['refrigerante']

      const items: { [key: string]: number } = {
        "pizza": quantidadePizza,
        "hamburguer": quantidadeHamburguer,
        "suco": quantidadeSuco,
        "refrigerante": quantidadeRefrigerante
      }

      let pedidoItens: string = ''

      for (const item in items) {
        if(items[item] > 0) {
          pedidoItens += ` ${item}: ${items[item]} `
        }
      }

      if(pedidoItens != '') {
        this.service.createPedido(idCliente, pedidoItens).subscribe(() => {
          alert('Pedido realizado com SUCESSO!')
          location.reload()
        })
      } else {
        alert('Escolha um item!')
      }

    } else {
      alert('Selecione os valores')
    }
  }
  
  ngOnInit() {
    this.service.getAll().subscribe((element) => {
      this.listaDelivery = element;
    })

    this.serviceCliente.getAll().subscribe((element) => {
      console.log(element)
      this.listaCliente = element;
    })
  }
}
