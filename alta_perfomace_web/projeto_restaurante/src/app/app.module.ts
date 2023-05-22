import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import {CadastroClienteComponent} from './components/cadastro-cliente/cadastro-cliente.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { PrincipalComponent } from './components/principal/principal.component'

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    CadastroClienteComponent,
    ReservaComponent,
    DeliveryComponent,
    CardapioComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
