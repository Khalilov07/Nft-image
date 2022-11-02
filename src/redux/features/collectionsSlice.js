import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    loading: false,
    collection: []
}
export const collectionSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {
      collectionReceived(state, action) {
        state.collection = action.payload
      },
  },
})
export const { collectionReceived } = collectionSlice.actions
export default collectionSlice.reducer
