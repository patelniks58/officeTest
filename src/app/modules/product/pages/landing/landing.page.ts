import { Component, OnInit } from '@angular/core';
import { Product} from '../../../product/models/product.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../../product/store';

@Component({
  selector: 'landing-page',
  templateUrl: './landing.page.html'
})
export class ProductListPage implements OnInit {
  
  products: Observable<Product[]>;

  constructor(private store: Store<fromStore.ProductsState>) {}
 
  ngOnInit() {
    this.products = this.store.select(fromStore.getAllProducts);
    this.store.dispatch(new fromStore.LoadProducts());

  }
}
