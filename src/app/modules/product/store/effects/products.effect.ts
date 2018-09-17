import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as productActions from '../actions/products.action';
import * as fromServices from '../../services';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productService: fromServices.ProductService
  ) {}

  @Effect()
  loadProducts$ = this.actions$.ofType(productActions.LOAD_PRODUCTS).pipe(
    switchMap(() => {
      return this.productService
        .getAllProducts()
        .pipe(
          map(products => new productActions.LoadProductsSuccess(products)),
          catchError(error => of(new productActions.LoadProductsFail(error)))
        );
    })
  );
}
