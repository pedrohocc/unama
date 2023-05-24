import { Component } from '@angular/core';
import { DeliveryService } from './service/delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {
  listaDelivery: [] = []
  constructor(private service:DeliveryService) {}
  
  ngOnInit() {

    this.service.getAll().subscribe((element) => {
      console.log(element)
      this.listaDelivery = element;
    })
  }
}
