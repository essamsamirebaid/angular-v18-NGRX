import { createReducer, on } from '@ngrx/store';
import { CartState } from './cart-item.model';
import * as CartActions from './cart.actions';

export const intialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartReducer = createReducer(
  intialState,
  on(CartActions.addToCart, (state, { item }) => ({
    ...state,
    items: [...state.items, item],
    totalQuantity: [...state.items, item].reduce(
      (total, item) => total + item.quantity,
      0
    ),
    totalPrice: [...state.items, item].reduce(
      (total, item) => total + item.price,
      0
    ),
  })),
  on(CartActions.removeFromCart, (state, { itemId }) => ({
    ...state,
    items: state.items.filter((item) => item.id !== itemId),
    totalQuantity: state.items.reduce(
      (total, item) => total + item.quantity,
      0
    ),
    totalPrice: state.items.reduce((total, item) => total + item.price, 0),
  })),
  on(CartActions.loadCartItemsSuccess, (state, { items }) => ({
    ...state,
    items: [...items],
    totalQuantity: items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: items.reduce((total, item) => total + item.price, 0),
  }))
);
