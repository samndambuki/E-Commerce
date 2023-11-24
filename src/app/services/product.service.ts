import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //whenever we have added an item to cart we need to emit that
  public cartAddedSubject = new Subject<boolean>();

  //create instance of http client
  constructor(private http: HttpClient) {}

  //return type will be an observable
  getAllProducts(): Observable<any[]> {
    debugger;
    //any is the data type
    return this.http.get<any[]>(
      'http://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts'
    );
  }

  //obj : any - we will get the object from the particular componet
  addToCart(obj: any): Observable<any> {
    return this.http.post<any>(
      'http://onlinetestapi.gerasim.in/api/Ecomm/AddToCart',
      obj
    );
  }

  getCartItemsByCustId(custId: number): Observable<any[]> {
    return this.http.get<any[]>(
      'http://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id=' +
        custId
    );
  }
}
