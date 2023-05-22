import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  {
    path: '',
    component:PrincipalComponent
  },
  {
    path: 'cadastro',
    component: CadastroClienteComponent
  },
  {
    path: 'cardapio',
    component: CardapioComponent
  },
  {
    path: 'delivery',
    component: DeliveryComponent
  },
  {
    path: 'reserva',
    component: ReservaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
