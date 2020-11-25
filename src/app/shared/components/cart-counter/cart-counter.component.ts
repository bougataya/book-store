import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageService } from '../../services/local-storage.service';
import { DataSharedService } from '../../services/data-shared.service';

@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.scss']
})
export class CartCounterComponent implements OnInit {
  faCart = faShoppingCart
  displayBasket : boolean = false
  public countBook : any

  constructor(
    private localStorageService: LocalStorageService,
    private dataService: DataSharedService
    ) { }

  ngOnInit(): void {
    this.countBook = this.localStorageService.booksCounter()
    this.dataService.countAllBooks$.subscribe((response) => {
      this.countBook = response 
    });
  }

  public displayMiniBasket(): void{
    this.displayBasket = !this.displayBasket
    this.dataService.displayMiniBasket$.next(this.displayBasket)
  }

}
