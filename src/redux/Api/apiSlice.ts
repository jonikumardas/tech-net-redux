import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const Api = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
      getProduct: builder.query({
        query:() => '/products',
      }),
      getSingleProduct: builder.query({
        query:(id) => `/product/${id}`,
      }),
    }),
  })
  
export const { useGetProductQuery,useGetSingleProductQuery } =Api