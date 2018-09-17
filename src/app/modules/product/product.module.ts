import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductPage} from '@product/pages/product/product.page';
import {SharedModule} from '@shared/shared.module';
import {ProductListPage} from '@product/pages/landing/landing.page';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from '../product/store';

// services
import * as fromServices from './services';
export const productRoutes: Routes = [
     {
        path: '',
        component: ProductListPage
    },
    {
        path: ':id',
        component: ProductPage
    }
    
];

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild(productRoutes),
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects),
    ],
     providers: [...fromServices.services],
    declarations: [
        ProductPage,
        ProductListPage
    ],
    
})
export class ProductModule {
}






