import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'promo'
})
export class PromoPipe implements PipeTransform {

  transform(price: number, promo:number, quantite:number = 1): string {
    return Math.round(((price - promo) * quantite) * 100) / 100 + ' €';
  }

}
