import { Component } from '@angular/core';
import { DeliveryService } from './service/delivery.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {
  listaDelivery: [] = []
  listaCliente: [] = []
  constructor(private service:DeliveryService) {}

  onSubmit(form: NgForm) {
    if(form.valid) {
      const idCliente: string = form.value['cliente']
      const item: string = form.value['item']
      this.service.createPedido(idCliente, item).subscribe(() => {
        window.location.reload();
      })
    } else {
      alert('Selecione os valores')
    }
  }
  
  ngOnInit() {
    this.service.getAllDelivery().subscribe((element) => {
      console.log(element)
      this.listaDelivery = element;
    })

    this.service.getAllClientes().subscribe((element) => {
      console.log(element)
      this.listaCliente = element;
    })
  }
}
