import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  public url = 'books/';
  public constructor(private http: HttpClient) {}

  public getPromo(isbn:any): Observable<any>{
    return this.http.get<any>(this.url + isbn + '/commercialOffers');
  }

  public getPrice(){
    

  }

}
