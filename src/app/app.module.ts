import {NgModule} from '@angular/core';
import {AppComponent} from '@app/app.component';
import {CoreModule} from '@core/core.module';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { reducers, CustomSerializer } from '../app/store';

import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';
// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { EffectsModule } from '@ngrx/effects';
// this would be done dynamically with webpack for builds
const environment = {
  development: true,
  production: false,
};

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];



// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'product' },
  {
    path: 'products',
    loadChildren: '@app/modules/product/product.module#ProductModule',
  },

];



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CoreModule,
        BrowserModule,
         RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    ],
     providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
    bootstrap: [AppComponent]
})
export class AppModule {}
