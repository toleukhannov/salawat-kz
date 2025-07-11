// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { categoryApi } from 'store/services/category/categoryApi';
import { productApi } from 'store/services/product/productApi';

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware, productApi.middleware),
});
