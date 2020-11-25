import { Component, OnInit, Inject } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Router } from '@angular/router';
import { DataSharedService } from '../../services/data-shared.service';


@Component({
  selector: 'app-mini-basket',
  templateUrl: './mini-basket.component.html',
  styleUrls: ['./mini-basket.component.scss']
})
export class MiniBasketComponent implements OnInit {
  books : any[] = []
  list : any[] = []
  constructor(
              private dataService : DataSharedService,
              @Inject(LOCAL_STORAGE) private storage: StorageService,
              private router: Router
              ) { }

  ngOnInit(): void { 
    this.countByBook()
  }

  public clearBasket():void{
    localStorage.clear()
    /** vider et initialider le compteur totale des livres */
    this.dataService.countAllBooks$.next('')
    /** vider le mini panier */
    this.books = []
  }

  public countByBook(){
    var initList = this.storage.get('books')
    if(initList != undefined){
      this.books = this.reducer(initList)
    }
    this.dataService.books$.subscribe((response:any) => {
      this.books = this.reducer(response)
    }); 
  }
 
  public reducer(list:any): any[]{
    var result = [...list.reduce( (mp:any, o:any) => {
      const key = JSON.stringify([o.isbn, o.cover]);
      if (!mp.has(key)) mp.set(key, { ...o, count: 0 });
        mp.get(key).count++;
      return mp;
    }, new Map).values()]; 
    this.storage.set('panier',result)
    return result
  }

  public redirectPanier(): void{
    this.router.navigate(['/basket']);
  }
}
