import { Component } from '@angular/core';
import { DeliveryService } from './service/delivery.service';
import { NgForm } from '@angular/forms';
import { CadastroService } from '../cadastro-cliente/cadastro.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {
  listaDelivery: [] = []
  listaCliente: [] = []
  constructor(private serviceCliente: CadastroService,
    private service:DeliveryService) {}

  onSubmit(form: NgForm) {
    if(form.valid) {
      const idCliente: string = form.value['cliente']
      const item: string = form.value['item']
      this.service.createPedido(idCliente, item).subscribe(() => {
        alert('Pedido realizado com SUCESSO!')
        window.location.reload();
      })
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
