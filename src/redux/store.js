import { configureStore } from '@reduxjs/toolkit'
import collectionReducer from './features/collectionsSlice'

export const store = configureStore({
  reducer: {
    collection: collectionReducer
  },
})