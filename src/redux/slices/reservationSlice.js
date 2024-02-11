import {createSlice} from "@reduxjs/toolkit";

const reservationSlice = createSlice({
    name: 'reservation',
    initialState: [
        {id: 1, date: '2021-10-10', guests: 5, boat: {
                name: 'Angel rose',
                price: 300
            }},
        {id: 2, date: '2021-10-10', guests: 7, boat: {
                name: 'Angel rose',
                price: 300
            }},
        {id: 3, date: '2021-10-10', guests: 3, boat: {
                name: 'Angel rose',
                price: 300
            }}
    ],
    reducers: {
        addNewReservation: (state, action) => {
            state.push({
                ...action.payload,
                id: state.length + 1,
                price: action.payload.boat.price * action.payload.guests,
                date: new Date().toISOString().slice(0, 10)
            })
        },
        deleteReservation: (state, action) => {
            state =  state.filter(reservation => reservation.id !== action.payload);
            console.log('New State: ', state);
            return state;
        }
    }
})

export const { addNewReservation, deleteReservation } = reservationSlice.actions
export default reservationSlice.reducer
