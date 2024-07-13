import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./features/bookSlice";


const store = configureStore({
    reducer: {
        book: bookSlice
    }
})

export type ReducerType = typeof store.dispatch;
export default store;