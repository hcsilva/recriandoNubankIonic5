import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

public options: Array<any> = [
  {icon: 'person-add-outline', text: 'Indicar amigos'},
  {icon: 'phone-portrait-sharp', text: 'Recarga de Celular'},
  {icon: 'wallet-outline', text: 'Depositar'},
  {icon: 'options-outline', text: 'Ajustar Limite'},
  {icon: 'help-circle-outline', text: 'Me Ajuda'},
  {icon: 'barcode-outline', text: 'Pagar'},
  {icon: 'lock-open-outline', text: 'Bloquear Cartão'},
  {icon: 'card-outline', text: 'Cartão Virtual'}
];

public slidesOptions: any = { slidesPerView: 2, freeMode: true};

public items: Array<any> = [

  {icon: 'help-circle-outline', text: 'Me Ajuda'},
  {icon: 'person-outline', text: 'Perfil'},
  {icon: 'cash-outline', text: 'Configurar Conta'},
  {icon: 'card-outline', text: 'Configurar Cartão'},
  {icon: 'phone-portrai-outline', text: 'Configurações do app'},
];


  constructor() {}

}
