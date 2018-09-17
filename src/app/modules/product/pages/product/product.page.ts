import {Component, OnInit} from '@angular/core';
import { ProductService } from '../../services';
import { Product} from '../../../product/models/product.model';
import { Router, ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../../product/store';

@Component({
    selector: 'product-page',
    templateUrl: 'product.page.html'
})
export class ProductPage implements OnInit {
  products$: Observable<Product>;

  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    this.products$ = this.store.select(fromStore.getSelectedProduct);
    this.store.dispatch(new fromStore.LoadProducts());
  }
}
