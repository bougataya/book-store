import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {
  /** Afficher / cacher le mini panier en haut */
  displayMiniBasket$ = new Subject();

  /** Compter le nombre total de livres dans le panier */
  countAllBooks$ = new Subject();

  /** La liste des livres */
  books$ = new Subject();

  constructor() { }
}
