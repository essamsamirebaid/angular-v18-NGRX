export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  url: string;
}

export interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}
