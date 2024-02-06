import { createSlice } from '@reduxjs/toolkit'

const boatSlice = createSlice({
  name: 'boat',
  initialState: [
    {id: 1, name: 'Boat 1'},
    {id: 2, name: 'Boat 2'},
    {id: 3, name: 'Boat 3'},
    {id: 4, name: 'Boat 4'}
  ],
  reducers: {
    getSingleBoat: (state, action) => {
      const boat = state.find(boat => boat.id = action.payload)
      if (boat) {
        return boat;
      } else {
        throw new Error('Boat not found')
      }
    }
  }
})

export const { getSingleBoat } = boatSlice.reducer

export default boatSlice.reducer
