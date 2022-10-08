import { configureStore } from '@reduxjs/toolkit'
import factsReducer from './factsSlice'

export const store = configureStore({
  reducer: {
    starWars: factsReducer,
  },
})