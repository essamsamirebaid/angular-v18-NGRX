import { createAction, props } from '@ngrx/store';
import { CartItem } from './cart-item.model';

// Action to add an item to the cart
export const addToCart = createAction(
  '[Items] Add To Cart',
  props<{ item: CartItem }>()
);


// Action to remove an item from the cart by ID
export const removeFromCart = createAction(
  '[Items] Remove From Cart',
  props<{ itemId: number }>()
);

// Action to load cart items (can be from API)
export const loadCartItems = createAction('[Items] Load Cart Items')

// Action to load cart items success
export const loadCartItemsSuccess = createAction(
  '[Items] Load Cart Items Success',
  props<{ items: CartItem[] }>()
);
