import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: "favourite",
    initialState: { "favourite": {counter:0,arr:[]} },
    reducers: {
        addToFourite(state, action) {
            console.log(state.favourite);
            console.log(action.payload);
            console.log("Before",state.favourite.arr);

            state.favourite.arr.push(action.payload); 
            console.log("After",state.favourite.arr);
            // console.log(state.favourite.arr.length);
            state.favourite.counter = state.favourite.arr.length;
        },
        removeFromFourite(state, action) {
            state.favourite.arr = state.favourite.arr.filter((movie) => movie.id !== action.payload);
            state.favourite.counter = state.favourite.arr.length;
        }
    }
});

export const {addToFourite, removeFromFourite} = favouriteSlice.actions;
export default favouriteSlice.reducer