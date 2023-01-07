import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
    `
    mat-card{
      margin-top: 20px;
    }
    mat-card-header{
      margin-bottom: 1rem;
    }
  `
  ]
})
export class HeroeTarjetaComponent{

  @Input() heroe!: Heroe;

}


