import { Component, ViewChild } from '@angular/core';
import { AnimationController, Platform, Animation } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('blocks') blocks: any;

  public options: Array<any> = [
    { icon: 'person-add-outline', text: 'Indicar amigos' },
    { icon: 'phone-portrait-sharp', text: 'Recarga de Celular' },
    { icon: 'wallet-outline', text: 'Depositar' },
    { icon: 'options-outline', text: 'Ajustar Limite' },
    { icon: 'help-circle-outline', text: 'Me Ajuda' },
    { icon: 'barcode-outline', text: 'Pagar' },
    { icon: 'lock-open-outline', text: 'Bloquear Cartão' },
    { icon: 'card-outline', text: 'Cartão Virtual' }
  ];

  public slidesOptions: any = { slidesPerView: 2, freeMode: true };

  public items: Array<any> = [
    { icon: 'help-circle-outline', text: 'Me Ajuda' },
    { icon: 'person-outline', text: 'Perfil' },
    { icon: 'cash-outline', text: 'Configurar Conta' },
    { icon: 'card-outline', text: 'Configurar Cartão' },
    { icon: 'phone-portrait-outline', text: 'Configurações do app' }
  ];


  public initialStep: number = 0;
  private maxTranslate: number;
  private animation: Animation;


  constructor(
    private animationCtrl: AnimationController,
    private plataform: Platform
  ) {
    this.maxTranslate = this.plataform.height() - 200;
  }

  ngAfterViewInit() {
    this.creationAnimation();
  }

  toogleBlocks() {
    this.initialStep = this.initialStep === 0 ? this.maxTranslate : 0;

    this.animation.direction(this.initialStep === 0 ? 'reverse' : 'normal').play();
  }

  creationAnimation() {
    this.animation = this.animationCtrl.create()
      .addElement(this.blocks.nativeElement)
      .duration(300)
      .fromTo('transform', 'translateY(0)', `translateY(${this.maxTranslate}px)`)
  }

}
