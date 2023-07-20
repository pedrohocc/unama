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
import { FormsModule } from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    CadastroClienteComponent,
    ReservaComponent,
    DeliveryComponent,
    CardapioComponent,
    PrincipalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
