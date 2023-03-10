import { Pipe, PipeTransform } from "@angular/core";
import { Heroe } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'imagen'
})
export class heroePipe implements PipeTransform {
  transform(heroe: Heroe): string {
    return `assets/heroes/${heroe.id}.jpg`
  }
}
