export interface CartItem {
  itemId: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}
