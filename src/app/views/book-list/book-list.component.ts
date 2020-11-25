import { Component, OnInit } from '@angular/core';
import { book } from './interfaces/book';
import { BookListService } from './services/book-list.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { DataSharedService } from 'src/app/shared/services/data-shared.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(
    private dataService: DataSharedService,
    private booksService: BookListService,
    private localStorageService: LocalStorageService) { }

  public books : any
  public booksIsbn: string[] = []
  public errorBooks = ''
  public searchBook = ''

  public ngOnInit(): void {
    this.getBooks()
  }

  public getBooks(): void {
    this.booksService.getBooks().subscribe(
      (response) => {
        this.books = response;
      },
      (error) => {
        this.errorBooks = error.message;
      }
    );
  }

  public addToCart(book:book): void {
    this.localStorageService.storeOnLocalStorage(book);
  }

}
