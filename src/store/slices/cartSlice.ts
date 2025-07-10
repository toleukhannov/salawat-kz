import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
// utilities
import { getCart, saveCart } from 'utilities/cartStorage';
// types
import type { CartState } from 'store/slices/types';

const initialState: CartState = {
  items: getCart(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.itemId === itemId);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ itemId, quantity: 1 });
      }

      saveCart(state.items);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.itemId === itemId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item.itemId !== itemId);
        }
      }

      saveCart(state.items);
    },

    initializeCart: (state) => {
      state.items = getCart();
    },
  },
});

export const { addToCart, removeFromCart, initializeCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectCartItemQuantity = (itemId: string) => (state: { cart: CartState }) =>
  state.cart.items.find((item) => item.itemId === itemId)?.quantity || 0;
export const selectCartIsEmpty = (state: { cart: CartState }) => state.cart.items.length === 0;
