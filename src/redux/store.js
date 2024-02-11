import { configureStore } from '@reduxjs/toolkit'
import boatReducer from './slices/boatSlice'
import reservationReducer from './slices/reservationSlice'

export default configureStore({
  reducer: {
    boat: boatReducer,
    reservation: reservationReducer
  },
})
