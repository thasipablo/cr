import { createSlice } from '@reduxjs/toolkit'

const boatSlice = createSlice({
  name: 'boat',
  initialState: [
    {id: 1, name: 'Boat 1', image: 'https://png.pngtree.com/png-clipart/20210516/original/pngtree-sea-blue-cruise-ship-png-image_6293419.png'},
    {id: 2, name: 'Boat 2', image: 'https://i.pinimg.com/474x/85/a1/8f/85a18fe48ac6b43dbdabc5587e69305d.jpg'},
    {id: 3, name: 'Boat 3', image: 'https://cdn.pixabay.com/photo/2023/07/27/04/18/cruise-8152401_1280.png'},
    {id: 4, name: 'Boat 4', image: 'https://i.pinimg.com/474x/85/a1/8f/85a18fe48ac6b43dbdabc5587e69305d.jpg'},
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
