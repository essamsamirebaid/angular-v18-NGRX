import { inject,  Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import * as CartActions from './cart.actions';
import * as CartSelectors from './cart.selectors';
import { HttpClient } from '@angular/common/http';
import { CartItem } from './cart-item.model';
import { AppConfig } from '../app.config';
@Injectable()
export class CartsEffects {
  readonly apiUrl = AppConfig.apiUrl
  readonly actions$: Actions = inject(Actions)
  constructor( private http: HttpClient) {}
  // Effect to load cart items from an API
  loadCartItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.loadCartItems),
      mergeMap(() =>
        this.http.get<CartItem[]>(`${this.apiUrl}/cartItems.json`).pipe(
          map((items) => CartActions.loadCartItemsSuccess({ items })),
          catchError(() => of({ type: '[Cart] Load Items Failed' }))
        )
      )
    )
  );
}
