import {createSlice} from '@reduxjs/toolkit'

const boatSlice = createSlice({
  name: 'boat',
  initialState: [
    {id: 1, name: 'Boat 1', price: 500, description: 'Description boat 1', image: 'https://png.pngtree.com/png-clipart/20210516/original/pngtree-sea-blue-cruise-ship-png-image_6293419.png'},
    {id: 2, name: 'Boat 2', price: 500, description: 'Description boat 2', image: 'https://i.pinimg.com/474x/85/a1/8f/85a18fe48ac6b43dbdabc5587e69305d.jpg'},
    {id: 3, name: 'Boat 3', price: 500, description: 'Description boat 3', image: 'https://cdn.pixabay.com/photo/2023/07/27/04/18/cruise-8152401_1280.png'},
    {id: 4, name: 'Boat 4', price: 500, description: 'Description boat 4', image: 'https://i.pinimg.com/474x/85/a1/8f/85a18fe48ac6b43dbdabc5587e69305d.jpg'},
  ],
  reducers: {
    addNewBoat: (state, action) => {
      state.push({...action.payload, id: state.length + 1})
    },

    //   create a reducer that returns a single boat found by id
    getSingleBoat: (state, action) => {
      console.log(state.find(boat => boat.id = action.payload));
    },

    // delete a boat
    deleteBoat: (state, action) => {
      state =  state.filter(boat => boat.id !== action.payload);
      console.log('New State: ', state);
      return state;
    }
  }
})

export const { getSingleBoat, addNewBoat, deleteBoat } = boatSlice.actions

export default boatSlice.reducer
