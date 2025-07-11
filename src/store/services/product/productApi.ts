// libraries
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// config
import { BASE_URL } from 'store/services/config';

type Product = {
  id: number;
  name: string;
  unit: string;
  itemId: string;
  imageUrl: string;
  sizes: Size[];
  description: string;
  categoryUUID: string;
};

type Size = {
  id: number;
  price: number;
  positionGrams: number;
  unit: string;
};
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
