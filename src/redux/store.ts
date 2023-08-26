import { configureStore } from '@reduxjs/toolkit'
import cardReduser from './fetures/card/cardSlice'
export const store = configureStore({
  reducer:cardReduser
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch