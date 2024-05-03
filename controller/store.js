import { configureStore } from "@reduxjs/toolkit";
import favouriteSlice from "./slices/favourite_slice";
import userSlice from "./slices/user_slice";
const store = configureStore({
    reducer: {
        user: userSlice,
        favourite: favouriteSlice,
    }
});

export default store