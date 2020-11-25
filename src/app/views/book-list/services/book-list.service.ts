import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { book} from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BookListService {

  public url = 'books';
  public constructor(private http: HttpClient) {}

  public getBooks(): Observable<book> {
    return this.http.get<book>(this.url);
  }

}
