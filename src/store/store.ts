// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { categoryApi } from 'store/services/category/categoryApi';
import { productApi } from 'store/services/product/productApi';
import cartReducer from 'store/slices/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware, productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
