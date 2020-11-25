import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(books: any[], searchBook: string): any[] {
    if(!books) return [];
    if(!searchBook) return books;
     searchBook = searchBook.toString().toLowerCase();
     return books.filter( book => {
          return book.title.toLowerCase().includes(searchBook);
      });
  }

}
