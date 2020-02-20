import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccounts(userId) {
    // return this.http.get<any>(`${environment.apiUrl}/accounts/{${userId}}`);
    // return this.httpClient.get<any>('http://dummy.restapiexample.com/api/v1/employees')
    return of({
      "accounts": {
        "savings": [
          "product 1",
          "product 2",
          "product 3"
        ],
        "mortgage": [
          "product 4",
          "product 5",
          "product 6"
        ],
        "payment": [
          "product 7",
          "product 8",
          "product 9"
        ]
      }
    });
  }
}
