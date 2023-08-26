import { configureStore } from '@reduxjs/toolkit'
import cartReduser from './fetures/card/cardSlice'
import productReduser from './fetures/card/productSlice'
import {Api}from './Api/apiSlice'
export const store = configureStore({
  reducer: {
    cart: cartReduser,
    product: productReduser,
    [Api.reducerPath]:Api.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(Api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch