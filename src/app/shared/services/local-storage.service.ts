import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Subject } from 'rxjs';
import { book } from '../../views/book-list/interfaces/book';
import { DataSharedService } from './data-shared.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  storage_key = 'books';
  
  

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService, private dataService : DataSharedService) {}
  
  public storeOnLocalStorage(book:book): void {       
    /* recuperer les isbn des livres */
    const currentList = this.storage.get(this.storage_key) || [];
    /**  pousser des nouveaux isbn dans le tableau */
    currentList.push(
      book
    );
    /**  mettre à jour la liste des isbn */
    this.storage.set(this.storage_key, currentList);

    this.dataService.books$.next(currentList)
    this.dataService.countAllBooks$.next(this.booksCounter());
  }

  public booksCounter():any{
    if(this.storage.get(this.storage_key) == undefined){
      return null
    }else{
      return this.storage.get(this.storage_key).length
    }
  }
}
