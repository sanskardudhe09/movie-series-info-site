import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice.js";
export const store = configureStore({
    reducer:{
        movies: moviesReducer,
    },
})