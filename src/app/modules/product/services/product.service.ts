import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Product } from '../models/product.model';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(`http://localhost:3000/Products`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

}
