import { Component, OnInit, Inject} from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { LOCAL_STORAGE,StorageService } from 'ngx-webstorage-service';
import { BasketService } from './services/basket.service';
import { RouteConfigLoadEnd } from '@angular/router';
import { DataSharedService } from 'src/app/shared/services/data-shared.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  books : any
  offer: any
  bestOffer: any
  totalPrice: number = 0

  constructor(private dataService : DataSharedService,
    @Inject(LOCAL_STORAGE) private storage: StorageService, private basketService: BasketService) { }

  ngOnInit(): void {
    this.books = this.storage.get('panier')
    this.totalPrice = this.getTotal()
    this.getOffers()
    this.clearBasket()
  }

  public clearBasket(){
    this.dataService.countAllBooks$.subscribe(() => {
      this.books = []
      this.totalPrice = 0
    }); 
  }
  public getOffers():void{
    this.basketService.getPromo(this.getParam()).subscribe(
      (response) =>  {
        this.bestOffer = this.getBestOffers(response.offers)
      }
    );
  }

  public getParam():string{
    let books = this.storage.get('books')
    let list : any[] = []
    books.map((book:any)=>{list.push(book.isbn)})
    return list.toString()
  }

  public getBestOffers(offers:any){
    offers.forEach((offer:any) => {
      switch(offer.type){
        case 'percentage':
            offer.promo = this.totalPrice * (offer.value / 100)
            break
        case 'minus':
            offer.promo = offer.value
            break
        case 'slice':
            offer.promo = (this.totalPrice / offer.sliceValue) * offer.value
            break
      }
    });
    let bestOffer = offers
      .reduce((previous:any, current:any) => previous.promo > current.promo ? previous : current)

    console.log('La meilleure offre :: ' + bestOffer.type)
    return bestOffer.promo
  }

  public getTotal(){ 
    return this.books
      .map((book:any)=>{ return book.price * book.count })
      .reduce((sum:number, current:any) => sum + current, 0);
  }

}
