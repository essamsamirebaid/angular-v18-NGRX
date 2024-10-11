import { createReducer, on } from '@ngrx/store';
import { CartState } from './cart-item.model';
import * as CartActions from './cart.actions';

export const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addToCart, (state, { item }) => {
    let obj;
    if (state.items.find((i) => i.id === item.id)) {
      console.log('object :>> ', state.items.find((i) => i.id === item.id));
      obj = { ...state };
      alert('Item already in cart');
    } else {
      obj = {
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
      };
    }
    return obj;
  }),
  on(CartActions.removeFromCart, (state, { itemId }) => ({
    ...state,
    totalQuantity: state.items.filter((item) => item.id !== itemId).reduce(
      (total, item) => total + item.quantity,
      0
    ),
    totalPrice:state.items.filter((item) => item.id !== itemId).reduce((total, item) => total + item.price, 0),
  })),
  on(CartActions.loadCartItemsSuccess, (state, { items }) => ({
    ...state,
    items: [...items],
    totalQuantity: items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: items.reduce((total, item) => total + item.price, 0),
  }))
);
