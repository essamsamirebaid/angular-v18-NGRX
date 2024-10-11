import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart-item.model';

// Feature selector to get the cart state
export const selectCart = createFeatureSelector<CartState>('cart');

// Selector to get all items in the cart
export const selectAllCartItems = createSelector(
  selectCart,
  (state: CartState) => state.items
);

// Selector to get the total quantity of items
export const selectAllCartItemsQuantity = createSelector(
  selectCart,
  (state) => state.totalQuantity
);

// Selector to get the total price of items
export const selectAllCartItemsPrice = createSelector(
  selectCart,
  (state) => state.totalPrice
);
