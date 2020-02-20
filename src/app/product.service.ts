import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProductDetails(productId): Observable<any> {
    console.log(productId);
    // TODO: send the message _after_ fetching the heroes
    return of({
      product: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
        key4: 'value4'
      }
    });
  }

}
