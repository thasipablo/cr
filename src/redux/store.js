import { configureStore } from '@reduxjs/toolkit'
import boatReducer from './slices/boatSlice'

export default configureStore({
  reducer: {
    boat: boatReducer
  },
})
